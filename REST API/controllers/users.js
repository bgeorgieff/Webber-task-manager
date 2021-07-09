const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { passwordsValidation } = require('../utils/validations')

const newUser = async (req, res, next) => {
  const {
    username,
    password,
    rePassword
  } = req.body
  console.log(req.body);

  const passwordMatch = passwordsValidation(password, rePassword)
  const saltRounds = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, saltRounds)
  
  const user = new User({username, password: hash})
  await user.save()

  const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET)

  res.cookie('x-auth-token', token).send(user)

  try {
    const user = new User({username, password, createdAt: Date.now()})
  } catch (err) {
    res.status(500).send(err.message)
  }
}

const logIn = async (req, res, next) => {
  const {
    username,
    password
  } = req.body

  if(username === null) {
    res.status(401).send('Something went wrong!')
  }

  const user = await User.findOne({ username })

  const status = bcrypt.compare(password, user.password)

  if(status) {
    const token = jwt.sign(user.id, process.env.JWT_SECRET)

    res.cookie('x-auth-token', token).send(user)
  } else {
    res.status(401).send('Something went wrong!')
  }
}

module.exports = {
  newUser,
  logIn
}

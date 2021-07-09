const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { passwordsValidation } = require('../utils/validations')

const newUser = async (req, res, next) => {
  const {
    username,
    password,
    repeatPassword
  } = req.body

  const passwordMatch = passwordsValidation(password, repeatPassword)

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  
  const user = new User({username, password: hash})
  await user.save()

  const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET)

  res.cookie('x-auth-token', token).send(user)

  try {
    const user = new Admin({username, password, createdAt: Date.now()})
  } catch (err) {
    res.status(500).send(error.message)
  }
}

const logIn = async (req, res, next) => {
  const {
    username,
    password
  } = req.body


}


module.exports = {
  newUser,
  logIn
}

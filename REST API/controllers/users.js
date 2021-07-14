const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { passwordsValidation } = require('../utils/validations')

const register = async (req, res, next) => {
  const {
    username,
    password,
    rePassword
  } = req.body

  try {
    const passwordMatch = passwordsValidation(password, rePassword)

    const saltRounds = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, saltRounds)
    
    const user = new User({username, password: hash})
    await user.save()

    const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET)

    return res.cookie('x-auth-token', token).send(user)

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

const verifyUser = async (req, res, next) => {
  if(!req.cookies['x-auth-token']) {
    res.status(401).send('Missing cookie!')
    return
  } 

  try {
    const userId = jwt.verify(req.cookies['x-auth-token'], process.env.JWT_SECRET)

    const user = await User.findById(userId)
    
    return res.send(user)
  } catch (err) {
    res.status(500).clearCookie('x-auth-token').send(err.message)
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find()

    return res.send(users)
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  register,
  logIn,
  verifyUser,
  getAllUsers
}

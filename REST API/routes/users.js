const router = require('express').Router()
const controllers = require('../controllers/index')

router.get('/login', controllers.users.logIn)

router.post('/register', controllers.users.newUser)

module.exports = router
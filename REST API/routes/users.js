const router = require('express').Router()
const controllers = require('../controllers/index')

router.post('/login', controllers.users.logIn)
router.post('/register', controllers.users.newUser)

module.exports = router
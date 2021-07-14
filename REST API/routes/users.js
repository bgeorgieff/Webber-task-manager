const router = require('express').Router()
const controllers = require('../controllers/index')

router.get('/verify-user', controllers.users.verifyUser)
router.get('/all', controllers.users.getAllUsers)

router.post('/login', controllers.users.logIn)
router.post('/register', controllers.users.register)


module.exports = router
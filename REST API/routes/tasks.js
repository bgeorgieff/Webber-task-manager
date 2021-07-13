const router = require('express').Router()
const controllers = require('../controllers')


router.post('/task', controllers.tasks.createTask)

module.exports = router
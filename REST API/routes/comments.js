const router = require('express').Router()
const controllers = require('../controllers')

router.post('/submit', controllers.comments.submitComment)

module.exports = router
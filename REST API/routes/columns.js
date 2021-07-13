const router = require('express').Router()
const controllers = require('../controllers')


router.post('/column', controllers.columns.createColumn)

module.exports = router
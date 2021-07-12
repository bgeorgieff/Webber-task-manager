const route = require('express').Router()
const controllers = require('../controllers')

route.post('/create', controllers.board.createBoard)

module.exports = route
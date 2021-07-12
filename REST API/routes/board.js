const router = require('express').Router()
const controllers = require('../controllers')

router.post('/create', controllers.board.createBoard)

router.get('/all', controllers.board.getAllBoards)

module.exports = router
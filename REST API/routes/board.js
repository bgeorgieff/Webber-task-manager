const router = require('express').Router()
const controllers = require('../controllers')

router.get('/all', controllers.board.getAllBoards)

router.post('/create', controllers.board.createBoard)
router.post('/current', controllers.board.getCurrentBoard)

module.exports = router
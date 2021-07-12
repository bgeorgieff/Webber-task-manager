const Board = require('../models/Board')

const createBoard = async (req, res, next) => {
  const { name, author } = req.body

  const board = new Board({name, author})
  await board.save()

  return res.send(board)
}

module.exports = {
  createBoard
}
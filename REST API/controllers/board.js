const Board = require('../models/Board')

const createBoard = async (req, res, next) => {
  const { name, author } = req.body

  const board = new Board({name, author})
  await board.save()

  return res.send(board)
}

const getAllBoards = async (req, res, next) => {
  const allBoards = await Board.find()

  res.send(allBoards)
}

const getCurrentBoard = async (req, res, next) => {
  const { id } = req.body

  const currentBoard = await Board.find({_id: id})

  res.send(currentBoard)
}

module.exports = {
  createBoard, 
  getAllBoards,
  getCurrentBoard
}
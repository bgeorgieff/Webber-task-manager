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

  const currentBoard = await 
  Board.find({_id: id})
    .populate({path: 'tasks'})
    .populate({path: 'tasks', populate: {path: 'assignedTo'}})
    .populate({path: 'author'})
                                  
  res.send(currentBoard)
}

const archiveTask = async (req, res, next) => {
  const { 
    taskId,
    boardId
  } = req.body

  await Board.findOneAndUpdate({_id: boardId}, {$addToSet: {taskHistory: taskId}})
  await Board.findOneAndUpdate({_id: boardId}, {$pull: {tasks: taskId}})
  // await User.findOneAndUpdate({})

  res.status('400').send('successfully archived')
}

module.exports = {
  createBoard, 
  getAllBoards,
  getCurrentBoard,
  archiveTask
}
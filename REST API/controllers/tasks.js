const Board = require('../models/Board')
const Tasks = require('../models/Tasks')

const getTask = async (req, res, next) => {
  const { id } = req.body
  
  try {
    const currentTask = await Tasks.find({_id: id})
      .populate({path: 'assignedTo'})
      .populate({path: 'comments'})
      .populate({path: 'comments', populate: {path: 'author'}})
    
    res.send(currentTask)
  } catch (e) {
    console.error(e);
  } 
}

const createTask = async (req, res, next) => {

  const {
    taskName,
    taskText,
    user,
    boardId,
    taskAssignedTo,
    taskStartDate,
    taskDueDate,
  } = req.body

  try {
    const task = new Tasks({
      name: taskName, 
      text: taskText, 
      author: user, 
      assignedTo: taskAssignedTo,
      startDate: taskStartDate,
      endDate: taskDueDate
    })
    
    await task.save()

    await Board.findByIdAndUpdate({_id: boardId}, {$addToSet: {tasks: task._id}})

    res.send(task)
    
  } catch (e) {
    console.error(e)
  }
}

const editTask = async (req, res, next) => {
  const {
    taskName,
    taskText,
    taskStartDate,
    taskEndDate,
    taskAssignedTo,
    taskId
  } = req.body

  try {
    const updatedTask = await Tasks.findOneAndUpdate({_id: taskId}, 
      {name: taskName, text: taskText, startDate: taskStartDate, endDate: taskEndDate, assignedTo: taskAssignedTo})

    res.send(updatedTask)
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  createTask,
  editTask,
  getTask
}
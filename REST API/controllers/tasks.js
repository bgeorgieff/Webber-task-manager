const Board = require('../models/Board')
const Tasks = require('../models/Tasks')

const createTask = async (req, res, next) => {

  const {
    taskName,
    taskText,
    user,
    boardId,
    taskAssignedTo,
    taskId
  } = req.body

  try {
    const task = new Tasks({name: taskName, text: taskText, author: user, assignedTo: taskAssignedTo})
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
  editTask
}
const Board = require('../models/Board')
const Tasks = require('../models/Tasks')

const createTask = async (req, res, next) => {

  const {
    taskName,
    taskText,
    user,
    boardId
  } = req.body

  console.log(req.body);

  try {
    const task = new Tasks({name: taskName, text: taskText, author: user})
    await task.save()

    await Board.findByIdAndUpdate({_id: boardId}, {$addToSet: {tasks: task._id}})

    res.send(task)
    
  } catch (e) {
    console.error(e);
  }
}


module.exports = {
  createTask,

}
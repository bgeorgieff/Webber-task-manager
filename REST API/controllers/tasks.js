const Tasks = require('../models/Tasks')

const createTask = (req, res, next) => {

  const {
    taskName,
    taskText,
    user
  } = req.body

  try {
    const task = new Tasks({name: taskName, text: taskText, author: user})
    task.save()

    res.send(task)
    
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  createTask
}
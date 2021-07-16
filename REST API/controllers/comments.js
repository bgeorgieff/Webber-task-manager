const Comment = require('../models/Comments')
const Tasks = require('../models/Tasks')

const submitComment = async (req, res, next) => {
  const {
    comment,
    author,
    taskId
  } = req.body

  const newComment = new Comment({comment: comment, author: author._id, taskId: taskId.id})
  await newComment.save()

  await Tasks.findByIdAndUpdate({_id: taskId.id}, {$addToSet: {comments: newComment._id}})

  res.send(newComment)

}

module.exports = {
  submitComment
}
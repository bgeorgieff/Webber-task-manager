const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  taskId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  },
  postDate: {
    type: mongoose.SchemaTypes.Date,
    default: new Date()
  }
})

module.exports = mongoose.model('Comments', commentSchema)
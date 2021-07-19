const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, 
  text: {
    type: String, 
    required: true
  },
  startDate: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
  }, 
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  assignedTo: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  comments: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Comments'
  }],
  status: {
    type: String,
  }
})

module.exports = new mongoose.model('Tasks', taskSchema)
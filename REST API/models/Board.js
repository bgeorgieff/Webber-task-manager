const mongoose = require('mongoose')

const boardSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  tasks: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }], 
  taskHistory: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }]
})

module.exports = mongoose.model('Board', boardSchema)
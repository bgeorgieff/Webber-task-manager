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
  tasks: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }, 
  columns: {
    type: mongoose.SchemaTypes.ObjectId, 
    ref: 'Columns'
  }, 
  columnOrder: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'ColumnOrder'
  }]
})

module.exports = mongoose.model('Board', boardSchema)
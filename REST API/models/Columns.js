const mongoose = require('mongoose')

const columnSchema = mongoose.Schema({
  name: {
    type: String,
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  tasks: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }
})

module.exports = new mongoose.model('Columns', columnSchema)
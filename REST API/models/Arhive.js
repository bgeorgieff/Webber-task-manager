const mongoose = require('mongoose')

const archiveSchema = new mongoose.Schema({
  board: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Board'
  },
  task: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }
})

module.exports = mongoose.model('Archive', archiveSchema)
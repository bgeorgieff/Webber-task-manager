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
  defaultColumns: {
    type: String
  },
  // columnOrder: [{
  //   type: mongoose.SchemaTypes.ObjectId
  // }]
})

module.exports = mongoose.model('Board', boardSchema)
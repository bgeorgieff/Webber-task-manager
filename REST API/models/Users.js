const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ 
  username: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true
  },
  password: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  openedTasks: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }],
  closedTasks: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Tasks'
  }]
})

module.exports = mongoose.model('User', UserSchema)
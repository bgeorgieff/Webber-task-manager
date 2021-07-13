const mongoose = require('mongoose')

const columnOrderSchema = new mongoose.Schema({
  columnOrder: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Columns'
  }]
})

module.exports = new mongoose.model('ColumnOrder', columnOrderSchema)
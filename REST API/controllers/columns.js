const Column = require('../models/Columns')

const createColumn = (req, res, next) => {
  const { 
    columnName,
    user
  } = req.body
  
  try {
    const col = new Column({author: user, name: columnName})
    col.save()

    res.send(col)

  } catch (e) {
    console.error(e);
  }

}

module.exports = {
  createColumn
}
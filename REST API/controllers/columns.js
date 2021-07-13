const Board = require('../models/Board')
const Column = require('../models/Columns')
// const ColumnOrder = require('../models/ColumnOrder')

const createColumn = async (req, res, next) => {
  const { 
    columnName,
    user,
    boardId
  } = req.body

  
  try {
    const col = new Column({author: user, name: columnName})
    await col.save()

    await Board.updateOne({ _id: boardId}, 
      {$addToSet: {
        columnOrder: col._id,
        columns: col._id
      }})

    res.send(col)

  } catch (e) {
    console.error(e);
  }

  return
}


module.exports = {
  createColumn,

}
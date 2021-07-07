import React, { useState } from 'react'
import initialData from './utils/initial-data'
import Column from './components/Columns'

const App = () => {
  const [data, setData] = useState(initialData) 

  const columnGetter = () => {
    return data.columnOrder.map((id) => {
      const column = data.columns[id]
      const task = column.taskIds.map((id) => {
        return data.tasks[id]
      })
      return <Column key={column.id} column={column} tasks={task} />
    })
  }

  return (
    <div>{columnGetter()}</div>

  )
}

export default App
import React, { useState } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import initialData from '../../utils/initial-data'
import Column from '../../components/columns'

const Container = styled.div`
  display: flex;
`

const TaskBoard = () => {
  const [data, setData] = useState(initialData) 

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type   } = result

    if(!destination) {
      return
    }

    if(destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
        return
    }

    if(type === 'column') {
      const newColumnOrder = Array.from(data.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)

      setData({
        ...data,
        columnOrder: newColumnOrder
      })
      return
    }

    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if(start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)
  
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }
  
      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      })
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish, 
      taskIds: finishTaskIds
    }

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    })
  }

  const columnGetter = () => {
    return data.columnOrder.map((id, index) => {
      const column = data.columns[id]
      const task = column.taskIds.map((id) => {
        return data.tasks[id]
      })
      return <Column key={column.id} column={column} tasks={task} index={index} />
    })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId={'all-columns'}
        direction='horizontal'
        type='column'
      >
        {provided => 
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {columnGetter()}
            {provided.placeholder}
          </Container>
        }
      </Droppable>
    </DragDropContext>

  )
}

export default TaskBoard
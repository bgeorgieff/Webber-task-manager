import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getTaskBoard from '../../utils/taskBoard'
import TaskContainer from '../task-container'

const Container = styled.div`
  margin-top:25px
`

const TaskList = (props) => {
  const [data, setData] = useState()

  const currentBoardId = { id: props.match.params.id }

  const boardTasks = async () => {
    const taskList = await getTaskBoard(currentBoardId)

    setData(taskList)
  }

  useEffect(() => {
    boardTasks()
  }, [])

  return (
    <Container>
      { data ? data[0].tasks.map((e) => {
        return <TaskContainer 
                  key={e.name} 
                  title={e.name} 
                  author={e.author} 
                  startDate={e.startDate}
                  endDate={e.endDate}
                  assignedTo={e.assignedTo}
                  boardId={currentBoardId}
                  taskId={e._id}
                  author={data[0].author.username}
               />}) : null}
    </Container>
  )
}

export default TaskList
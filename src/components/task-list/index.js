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
      {/* <table>
        <tbody>
          <tr>
            <td>
              task name
            </td>
            <td>
              task name
            </td>
            <td>
              task name
            </td>
            <td>
              task name
            </td>
            <td>
              task name
            </td>
          </tr> */}

      { data ? data[0].tasks.map((e) => {
        return <TaskContainer 
                  key={e.name} 
                  title={e.name} 
                  author={e.author} 
                  startDate={e.startDate}
                  endDate={e.endDate}
                  assignedTo={e.assignedTo.username}
                  boardId={currentBoardId}
                  taskId={e._id}
                  author={data[0].author.username}
               />}) : null}
                       {/* </tbody>
      </table> */}
    </Container>
  )
}

export default TaskList
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getTaskBoard from '../../utils/taskBoard'
import TaskContainer from '../task-container'

const Table = styled.table`
  margin-top:25px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
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
    <Table>
      <thead>
        <tr>
          <th>
            Task Name:
          </th>
          <th>
            Assigned By:
          </th>
          <th>
            Start Date:
          </th>
          <th>
            Due Date:
          </th>
          <th>
            Assigned To:
          </th>
          <th>
            Options:
          </th>
          <th>
            Details:
          </th>
        </tr>
      </thead>
      <tbody>
        { data ? data[0].tasks
            .map((e) => { return <TaskContainer 
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
      </tbody>
    </Table>
  )
}

export default TaskList
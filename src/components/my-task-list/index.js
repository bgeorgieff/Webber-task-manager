import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import PageWrapper from '../../components/page-wrapper'
import styled from 'styled-components'
import TaskContainer from '../../components/task-container'
import getMyTasks from '../../utils/getMyTasks'


const Container = styled.div`
  padding: 26px;
`

const Table = styled.table`
  margin-top:25px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const MyTaskList = () => {
  const params = useParams()
  const [data, setData] = useState()
  const [tasks, setTasks] = useState(false)
  
  const userId = params.id.split('&boarId=')

  useEffect(() => {
    (async () => {
   
      const tasks = await getMyTasks('http://localhost:9999/api/tasks/my-tasks', {
        user: userId[0]
      })
  
      if(tasks[0].openedTasks.length > 0) {
        setData(tasks[0].openedTasks)
        setTasks(true)
      }
    })()
  },  [data, tasks, userId])

  return (
    <PageWrapper>
      <Container>
        <h4>Color Legend:</h4>
        <div>
          <p style={{padding: '8px', display: 'inline-block'}}>Task will overdue</p>
          <span style={{backgroundColor: 'red', display: 'inline-block', width: '35px', height: '15px'}}></span>
        </div>
        <div>
          <p style={{padding: '8px', display: 'inline-block'}}>Less then 4 days remaining</p>
          <span style={{backgroundColor: 'yellow', display: 'inline-block', width: '35px', height: '15px'}}></span>
        </div>
      </Container>
      { tasks ?
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
          { data ? data.map((e) => { 
              return <TaskContainer 
                key={e.name} 
                title={e.name} 
                author={e.author} 
                startDate={e.startDate}
                endDate={e.endDate}
                assignedTo={e.assignedTo.username}
                boardId={userId[1]}
                taskId={e._id}
              />}) : null}
        </tbody>
      </Table> : <p>You currently don't have any tasks</p>}
    </PageWrapper>
  )
}

export default MyTaskList
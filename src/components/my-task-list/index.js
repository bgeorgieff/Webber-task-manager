import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useParams } from 'react-router'
import PageWrapper from '../../components/page-wrapper'
import styled from 'styled-components'
import TaskContainer from '../../components/task-container'
import getMyTasks from '../../utils/getMyTasks'
import UserContext from '../../Contexts/Context'

const Container = styled.div`
padding: 26px;
`

const Table = styled.table`
margin-top:25px;
max-width: 900px;
margin-left: auto;
margin-right: auto;
`

const MyTaskList = (props) => {

  const context = useContext(UserContext)



  const myTasks = useCallback( async () => {

    if(context.user._id) {
    
    }
    const taskList = await getMyTasks('http://localhost:9999/api/tasks/my-tasks', {

    })

    console.log(taskList);
  })

  useEffect(() => {
    myTasks()
  }, [myTasks])


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
          {/* { data ? data[0].tasks
            .map((e) => { 
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
              />}) : null} */}
        </tbody>
      </Table>
    </PageWrapper>
  )
}

export default MyTaskList
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../input'
import Submit from '../submit'
import Title from '../title'
import UserContext from '../../Contexts/Context'
import createTask from '../../utils/createTask'

const InlineContainer = styled.div`
  display: inline-block;
`

const CreateTaskContainer = styled.div``

const Form = styled.form`
  display: inline-block;
`

const BoardCreation = (props) => {

  const [taskName, setTaskName] = useState('')
  const [taskText, setTaskText] = useState('')
  const [taskStartDate, setTaskStartDate] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [users, setUsers] = useState([])
  const [taskAssignedTo, setTaskAssignedTo] = useState('')

  const [data, setData] = useState(false)
  
  const context = useContext(UserContext)
  const boardId = props.match.params.id

  const handleTaskSubmit = async (event) => {
    event.preventDefault()


    if(!taskName || !taskText || !taskStartDate || taskDueDate ) {
      setData(true)
    }

    await createTask('http://localhost:9999/api/create-new/task', {
      taskName, 
      taskText,
      taskStartDate,
      taskDueDate,
      taskAssignedTo,
      user: context.user._id,
      boardId
    })

    setTaskName('')
    setTaskText('')
    setTaskStartDate('')
    setTaskDueDate('')
    // setTaskAssignedTo('')
  }

  const getAllUsers = async () => {
    const response = await fetch('http://localhost:9999/api/user/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const users = await response.json()
    
    setUsers(users)
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  // console.log(taskAssignedTo);

  const op = () => {
    users.map((e) => {
      console.log(e, '<-USERS');
    })
    op()
  }

  return (
    <div>
      {/* { data ? <div>SMTH IS MISSING STYLE ME</div> :  */}
      <CreateTaskContainer>
        <Title title="Project Tasks" />
        <Form onSubmit={handleTaskSubmit}>
          <InlineContainer>
            <Input 
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              label='Task Name'
              id='taskName'
            />
          </InlineContainer>
          <InlineContainer>
            <Input 
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              label='Task text'
              id='taskText'
            />

          </InlineContainer>
          <InlineContainer>
            <Input 
              value={taskStartDate}
              onChange={(e) => setTaskStartDate(e.target.value)}
              label='Start Date'
              id='startDate'
            />
          </InlineContainer>
          <InlineContainer>
            <Input 
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
              label='Due Date'
              id='dueDate'
            />
          </InlineContainer>
          <InlineContainer>
            <select value={taskAssignedTo} onChange={(e) => setTaskAssignedTo(e)}>
              <option>----select----</option>
              {
                users.map((e) => 
                  <option value={e.username}>{e.username}</option>
                )
              }
            </select>
          </InlineContainer>
          <div>
            <Submit title='Create Task' />
          </div>
        </Form>
      </CreateTaskContainer>
      {/* } */}
    </div>
  )
}

export default BoardCreation
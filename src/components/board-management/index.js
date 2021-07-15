import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../input'
import Submit from '../submit'
import Title from '../title'
import UserContext from '../../Contexts/Context'
import createTask from '../../utils/createTask'
import Select from 'react-select'
import Calendar from 'react-calendar'

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
  
  const context = useContext(UserContext)
  const boardId = props.match.params.id

  const handleTaskSubmit = async (event) => {
    event.preventDefault()

    await createTask('http://localhost:9999/api/tasks/create-new', {
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
    setTaskAssignedTo('')
  }

  const getAllUsers = async () => {
    const response = await fetch('http://localhost:9999/api/user/all', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })

    const users = await response.json()
    
    const options = users.map((e) => ({
      "userId": e._id,
      "label": e.username
    }))

    setUsers({
      options
    })
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div>
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
          <InlineContainer style={{width: '300px'}}>
             <Select getOptionValue={option => option.label} options={users.options} onChange={(e) => setTaskAssignedTo(e.userId)} />
          </InlineContainer>
          <div>
            <Submit title='Create Task' />
          </div>
        </Form>
      </CreateTaskContainer>
    </div>
  )
}

export default BoardCreation
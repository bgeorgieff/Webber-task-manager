import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../../components/input'
import Submit from '../../components/submit'
import Title from '../../components/title'
import Select from 'react-select'
import PageWrapper from '../../components/page-wrapper'
import submitEdit from '../../utils/submitEdit'
import getCurrentTask from '../../utils/getCurrentTask'

const InlineContainer = styled.div`
  display: inline-block;
`

const CreateTaskContainer = styled.div``

const Form = styled.form`
  display: inline-block;
`
const EditTask = (props) => {

  const [taskName, setTaskName] = useState('')
  const [taskText, setTaskText] = useState('')
  const [taskStartDate, setTaskStartDate] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [users, setUsers] = useState([])
  const [taskAssignedTo, setTaskAssignedTo] = useState('')

  const currentTaskId = props.match.params

  const getCurrentTaskInfo = async () => {
    const getTaskInfo = await getCurrentTask('http://localhost:9999/api/tasks/get-task', currentTaskId)
    
    setTaskName(getTaskInfo[0].name)
    setTaskText(getTaskInfo[0].text)
    setTaskStartDate(getTaskInfo[0].startDate)
    setTaskDueDate(getTaskInfo[0].endDate)
    setTaskAssignedTo(getTaskInfo[0].assignedTo)
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

  const handleEditSubmit = async (event) => {
    event.preventDefault()

    await submitEdit('http://localhost:9999/api/tasks/edit-task', {
      taskName,
      taskText,
      taskStartDate,
      taskDueDate,
      taskAssignedTo,
      taskId: props.match.params.id
    })  
  }
  
  useEffect(() => {
    getCurrentTaskInfo()
    getAllUsers()
  }, [])

  return (
    <PageWrapper>
      <CreateTaskContainer>
        <Title title="Edit Task" />
        <Form onSubmit={handleEditSubmit}>
          <InlineContainer>
            <Input 
              value={taskName || ''}
              onChange={(e) => setTaskName(e.target.value)}
              label='Task Name'
              id='taskName'
            />
          </InlineContainer>
          <InlineContainer>
            <Input 
              value={taskText || ''}
              onChange={(e) => setTaskText(e.target.value)}
              label='Task text'
              id='taskText'
            />

          </InlineContainer>
          <InlineContainer>
            <Input 
              value={taskStartDate || ''}
              onChange={(e) => setTaskStartDate(e.target.value)}
              label='Start Date'
              id='startDate'
            />
          </InlineContainer>
          <InlineContainer>
            <Input 
              value={taskDueDate || ''}
              onChange={(e) => setTaskDueDate(e.target.value)}
              label='Due Date'
              id='dueDate'
            />
          </InlineContainer>
          <InlineContainer style={{width: '300px'}}>
             <Select getOptionValue={options => options.label} options={users.options} onChange={(e) => setTaskAssignedTo(e.userId)} />
          </InlineContainer>
          <div>
            <Submit title='Edit Task' />
          </div>
        </Form>
      </CreateTaskContainer>
    </PageWrapper>
  )
}

export default EditTask
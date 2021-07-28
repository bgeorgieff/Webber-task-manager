import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../input'
import Submit from '../submit'
import Title from '../title'
import createTask from '../../utils/createTask'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import UserContext from '../../Contexts/Context'

const Container = styled.div`
  padding: 20px 20px 0px 20px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`
const ButtonContainer = styled.div`
  margin-top: 28px;
  padding-left: 45px;
`

const TitleContainer = styled.div`
  padding:20px;
`

const Label = styled.label`
  display: block;
  text-align: left;
  font: inherit;
  padding-left: 20px;
  margin-bottom: 8px;
`

const InlineContainer = styled.div`
  display: inline-block;
`

const CreateTaskContainer = styled.div`
  margin-bottom: 55px;
`

const Form = styled.form`
  display: block;
`

const TaskMessageContainer = styled.div`
  width: 350px;
  height: auto;
  padding: 20px 20px 0px 20px;
`

const TextInput = styled.textarea`
  width: 850px;
  height: 200px;
  border-radius: 6px;
  border: 1px solid black
`

const BoardCreation = (props) => {

  const [taskName, setTaskName] = useState('')
  const [taskText, setTaskText] = useState('')
  const [taskStartDate, setTaskStartDate] = useState(new Date())
  const [taskDueDate, setTaskDueDate] = useState('')
  const [users, setUsers] = useState([])
  const [taskAssignedTo, setTaskAssignedTo] = useState('')
  const context = useContext(UserContext)

  const boardId = props.boardId
 
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
        <TitleContainer>
          <Title title="Project Tasks" />
        </TitleContainer>
        <Form onSubmit={handleTaskSubmit}>
          <InlineContainer>
            <Container>
              <Input 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                label='Task Name'
                id='taskName'
              />
            </Container>
          </InlineContainer>
          <TaskMessageContainer>
            <Container>
            <label style={{marginBottom: '8px', display: 'block'}} htmlFor={boardId}>Task Message:</label>
              <TextInput 
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                // label='Task text'
                // id='taskText'
              ></TextInput>
            </Container>
          </TaskMessageContainer>
          <InlineContainer>
            <Container>
              <Label htmlFor={boardId}>Start Date:</Label>
              <DatePicker minDate={moment().toDate()} selected={taskStartDate} onChange={(date) => setTaskStartDate(date)} placeholderText={taskStartDate}/>
            </Container>
          </InlineContainer>

          <InlineContainer>
            <Container>
              <Label htmlFor={boardId}>Due Date:</Label>
              <DatePicker minDate={moment().toDate()} selected={taskDueDate} onChange={(date) => setTaskDueDate(date)} />
            </Container>
          </InlineContainer>
          <TaskMessageContainer style={{width: '250px'}}>
            <Container>
            
              <label style={{marginBottom: '8px', display: 'block'}} htmlFor={boardId}>Assigned To:</label>
              <Select style={{border: '1px solid black'}} getOptionValue={option => option.label} options={users.options} onChange={(e) => setTaskAssignedTo(e.userId)} />
            </Container>
          </TaskMessageContainer>
          <ButtonContainer>
            <Submit title='Create Task' />
          </ButtonContainer>
        </Form>
      </CreateTaskContainer>
    </div>
  )
}

export default BoardCreation
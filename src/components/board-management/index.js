import React, { useContext, useEffect, useState } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import Input from '../input'
import Submit from '../submit'
import Title from '../title'
import UserContext from '../../Contexts/Context'
import createTask from '../../utils/createTask'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Container = styled.div`
  padding: 20px 20px 0px 20px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`

const Label = styled.label`
  display: block;
  text-align: left;
  font: inherit;
`

const InlineContainer = styled.div`
  display: inline-block;
`

const CreateTaskContainer = styled.div``

const Form = styled.form`
  display: inline-block;
`

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,

      border: '1px solid black',
      padding: '25px'

    };
  },

};


const BoardCreation = (props) => {

  const [taskName, setTaskName] = useState('')
  const [taskText, setTaskText] = useState('')
  const [taskStartDate, setTaskStartDate] = useState(new Date())
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
            <Container>
              <Label>Start Date</Label>
              <DatePicker selected={taskStartDate} onChange={(date) => setTaskStartDate(date)} placeholderText={taskStartDate}/>
            </Container>
          </InlineContainer>

          <InlineContainer>
            <Label>Due Date</Label>
            <DatePicker selected={taskDueDate} onChange={(date) => setTaskDueDate(date)} />
          </InlineContainer>
          <InlineContainer style={{width: '300px'}}>
             <Select styles={colourStyles} getOptionValue={option => option.label} options={users.options} onChange={(e) => setTaskAssignedTo(e.userId)} />
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
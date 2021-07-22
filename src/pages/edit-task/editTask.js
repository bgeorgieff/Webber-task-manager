import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../../components/input'
import Submit from '../../components/submit'
import Title from '../../components/title'
import Select from 'react-select'
import PageWrapper from '../../components/page-wrapper'
import submitEdit from '../../utils/submitEdit'
import getCurrentTask from '../../utils/getCurrentTask'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { useHistory } from 'react-router'

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

const EditTask = (props) => {

  const [taskName, setTaskName] = useState('')
  const [taskText, setTaskText] = useState('')
  const [taskStartDate, setTaskStartDate] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [users, setUsers] = useState([])
  const [taskAssignedTo, setTaskAssignedTo] = useState('')
  const history = useHistory()

  const currentTaskId = props.match.params

  const getCurrentTaskInfo = async () => {
    const getTaskInfo = await getCurrentTask('http://localhost:9999/api/tasks/get-task', currentTaskId)
    
    setTaskName(getTaskInfo[0].name)
    setTaskText(getTaskInfo[0].text)

    const formattedStartDate = moment(getTaskInfo[0].startDate).toDate()
    const formattedEndDate = moment(getTaskInfo[0].endDate).toDate()

    setTaskStartDate(formattedStartDate)
    setTaskDueDate(formattedEndDate)

    setTaskAssignedTo(getTaskInfo[0].assignedTo)
  }

  const boardId = props.match.params.id

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
      taskAssignedTo: taskAssignedTo.userId,
      taskId: props.match.params.id
    })  

    history.push(`/view/task/${currentTaskId.id}`)
  }

  useEffect(() => {
    getCurrentTaskInfo()
    getAllUsers()
  }, [])

  return (
    <PageWrapper>
      <CreateTaskContainer>
        <TitleContainer>
          <Title title="Edit Task" />
        </TitleContainer>
        <Form onSubmit={handleEditSubmit}>
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
              ></TextInput>
            </Container>
          </TaskMessageContainer>
          <InlineContainer>
            <Container>
              <Label htmlFor={boardId}>Start Date:</Label>
              <DatePicker selected={taskStartDate} onChange={(date) => setTaskStartDate(date)} placeholderText={taskStartDate}/>
            </Container>
          </InlineContainer>

          <InlineContainer>
            <Container>
              <Label htmlFor={boardId}>Due Date:</Label>
              <DatePicker minDate={moment().toDate()} selected={taskDueDate} onChange={(date) => setTaskDueDate(date)} placeholderText={taskDueDate} />
            </Container>
          </InlineContainer>
          <TaskMessageContainer style={{width: '250px'}}>
            <Container>
            {/* need default selected user */}
              <label style={{marginBottom: '8px', display: 'block'}} htmlFor={boardId}>Assigned To:</label>
              <Select minDate={moment().toDate()} style={{border: '1px solid black'}} getOptionValue={option => option.label} options={users.options} onChange={(e) => setTaskAssignedTo(e)} />
            </Container>
          </TaskMessageContainer>
          <ButtonContainer>
            <Submit title='Edit Task' />
          </ButtonContainer>
        </Form>
      </CreateTaskContainer>
    </PageWrapper>
  )
}

export default EditTask


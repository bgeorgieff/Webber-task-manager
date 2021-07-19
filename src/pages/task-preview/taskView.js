import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageWrapper from '../../components/page-wrapper'
import getCurrentTask from '../../utils/getCurrentTask'
import Modal from '../../components/comment-modal'
import moment from 'moment'

const TaskCard = styled.div`
  width: 100%;
  background-color: #ffe28a;
`

const Container = styled.div`
  padding: 16px;
`

const TaskInfo = styled.div`
  display: flex;
  margin: 8px;
`

const Para = styled.p`
  padding: 0 16px 0 16px;
`

const Divider = styled.div`
  padding: 0 16px 0 16px;
  margin: 8px;
  width: 70%;
  border-bottom: 1px solid black
`

const CommentContainer = styled.div`
  border: 1px solid black; 
  border-radius: 6px;
  margin: 16px;
`

const SingleComment = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  padding: 8px;
  margin: 8px;
  background-color: #eceded;
`
const Button = styled.button`
  padding: 8px 26px 8px 26px;
  background-color: black;
  color: white;
  font: inherit;
  font-weight: 700;
  margin: 8px;
  border: 1px solid black
`

const ButtonContainer = styled.div`
  margin: 16px 0 16px 0;
  text-align: right;
`

const TaskView = (props) => {

  const [taskName, setTaskName] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [startDate, setStartDate] = useState('')
  const [taskText, setTaskText] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [comments, setComments] = useState()
  const [showModal, setShowModal] = useState(false)

  const currentTaskId = props.match.params

  const getTaskInfo = async () => {
    const info = await getCurrentTask('http://localhost:9999/api/tasks/get-task', currentTaskId)
    
    setTaskName(info[0].name)
    setAssignedTo(info[0].assignedTo.username)
    setTaskText(info[0].text)
    setStartDate(info[0].startDate)
    setDueDate([info[0].endDate])
    setComments(info[0].comments)
  }
  
  const openModal = () => {
    setShowModal( prev => !prev)
  }

  const dueDateFormat = moment(dueDate).format('LL')
  const startDateFormat = moment(startDate).format('LL')


  useEffect(() => {
    getTaskInfo()
  }, [])
  
  return (
    <PageWrapper>
      <TaskCard>
        <Container>
          <div>
            <h1>{taskName}</h1>
            <Link style={{float: 'right'}} to={`/edit/task/${props.taskId}`}>Edit Task</Link>
          </div>
          <TaskInfo>
            <div style={{margin: '20px', fontWeight: '700'}}>Start date: {startDateFormat}</div>
            <div style={{margin: '20px', fontWeight: '700'}}>Assigned to: {assignedTo}</div>
            <div style={{margin: '20px', fontWeight: '700'}}>Due Date: {dueDateFormat}</div>
          </TaskInfo>
          <Divider />
          <Para>{taskText}</Para>
          <ButtonContainer>
            <Button onClick={openModal}>Add Comment</Button>
            <Button>Close Task</Button>
          </ButtonContainer>
          <Modal taskId={currentTaskId} showModal={showModal} setShowModal={setShowModal} />
        </Container>
      </TaskCard>
      <Container>
        <h3>Comments:</h3>
      </Container>
      <CommentContainer>
        <div>
          {comments ? comments.map((e) => 
          <SingleComment key={e._id}>
            <h4>On <span style={{fontStyle: 'italic'}}>{e.postDate}</span> <span style={{color: '#f83e25'}}>{e.author.username}</span> wrote:</h4>
            <Para>{e.comment}</Para>
          </SingleComment> 
          ) : 'No Comments'
          }
        </div>
      </CommentContainer>
    </PageWrapper>
  )
}

export default TaskView
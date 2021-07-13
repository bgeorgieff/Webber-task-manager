import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Input from '../input'
import Submit from '../submit'
import Title from '../title'
import UserContext from '../../Contexts/Context'
import createColumn from '../../utils/createColumn'
import createTask from '../../utils/createTask'

const InlineContainer = styled.div`
  display: inline-block;
`

const CreateColumnContainer = styled.div`

`

const CreateTaskContainer = styled.div``

const Form = styled.form`
  display: inline-block;
`

const BoardCreation = (props) => {

  const [columnName, setColumnName] = useState('')
  const [taskName, setTaskName] = useState('')
  const [taskText, setTaskText] = useState('')
  const context = useContext(UserContext)
  const boardId = props.match.params.id

  const handleColumnSubmit = async (event) => {
    event.preventDefault()
    
    await createColumn('http://localhost:9999/api/create/column', {
      columnName,
      user: context.user._id,
      boardId
    })

    setColumnName('')
  }

  const handleTaskSubmit = async (event) => {
    event.preventDefault()

    await createTask('http://localhost:9999/api/create-new/task', {
      taskName, 
      taskText,
      user: context.user._id,
      boardId
    })

    setTaskName('')
    setTaskText('')
  }

  return (
    <div>
      <CreateColumnContainer>
        <Form onSubmit={handleColumnSubmit}>
          <Title title='Manage Board' />
          <Input 
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
            label='Column Name'
            id='columnName'
          />
          <Submit title='Create Column' />
        </Form>
      </CreateColumnContainer>
      <CreateTaskContainer>
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
          <Submit title='Create Task' />
        </Form>
      </CreateTaskContainer>
    </div>
  )
}

export default BoardCreation
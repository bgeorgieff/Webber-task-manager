import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import TaskCreation from '../../components/board-management'
import TaskList from '../../components/task-list'
import { useParams } from 'react-router-dom'

const TaskBoard = () => {
  const params = useParams()

  if(!params) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <PageWrapper>
      <div>
        <TaskCreation boardId={params} />
      </div>
      <div>
        <TaskList />
      </div>
    </PageWrapper>
  )
}

export default TaskBoard
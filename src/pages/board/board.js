import React, { useContext } from 'react'
import PageWrapper from '../../components/page-wrapper'
import TaskCreation from '../../components/board-management'
import TaskList from '../../components/task-list'
import WorkplaceContext from '../../Contexts/Workplace'

const TaskBoard = () => {
  const context = useContext(WorkplaceContext)

  return (
    <PageWrapper>
      <div>
        <TaskCreation boardId={context.id} />
      </div>
      <div>
        <TaskList boardId={context.id} />
      </div>
    </PageWrapper>
  )
}

export default TaskBoard
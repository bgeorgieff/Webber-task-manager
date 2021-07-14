import React, { useEffect, useState } from 'react'
import PageWrapper from '../../components/page-wrapper'
import BoardCreation from '../../components/board-management'
import TaskList from '../../components/task-list'


const TaskBoard = (props) => {

  return (
    <PageWrapper>
      <BoardCreation {...props} />
      <TaskList {...props} />
    </PageWrapper>
  )
}

export default TaskBoard
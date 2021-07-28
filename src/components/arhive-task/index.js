import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router'
import { useParams } from 'react-router-dom'
import UserContext from '../../Contexts/Context' 

const ArhiveTask = () => {
  const params = useParams()
  const context = useContext(UserContext)
  const [taskId, boardId] = params.id.split('&boarId=')

  useEffect(() => {
    (async () => {
      fetch('http://localhost:9999/api/board/archive-task', {
        method: 'POST',
        body: JSON.stringify({ 
          taskId: taskId,
          boardId,
          userId: context.user._id
        }),
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include'
      })
    })()
  }, [context, taskId, boardId])

  return (
    <Redirect to={`/workplace`} />
  )
}

export default ArhiveTask
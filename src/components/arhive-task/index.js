import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import { useParams } from 'react-router-dom'

const ArhiveTask = (props) => {
  const [taskId, boardId] = props.match.params.id.split('&boarId=')

  useEffect(async () => {
    fetch('http://localhost:9999/api/board/archive-task', {
      method: 'POST',
      body: JSON.stringify({ 
        taskId: taskId,
        boardId
      }),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })
  })

  return (
    <Redirect to={`/workplace`} />
  )
}

export default ArhiveTask
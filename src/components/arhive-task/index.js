import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router'
import UserContext from '../../Contexts/Context'

const ArhiveTask = (props) => {
  const [taskId, boardId] = props.match.params.id.split('&boarId=')
  const context = useContext(UserContext)

  console.log(context);

  useEffect(async () => {
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
  })

  return (
    <Redirect to={`/workplace`} />
  )
}

export default ArhiveTask
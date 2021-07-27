import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router'
import UserContext from '../../Contexts/Context'

const LogOut = () => {

  const context = useContext(UserContext)

  useEffect(() => {
    context.logOut()
    document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    window.location.reload(false)
  }, [])
  
  return (
    <Redirect to='/' />
  )
}

export default LogOut
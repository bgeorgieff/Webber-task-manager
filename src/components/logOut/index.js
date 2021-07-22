import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router'
import UserContext from '../../Contexts/Context'

const LogOut = () => {

  const context = useContext(UserContext)

  useEffect(() => {
    context.logOut()
    sessionStorage.removeItem('id')
  }, [])
  
  return (
    <Redirect to='/' />
  )
}

export default LogOut
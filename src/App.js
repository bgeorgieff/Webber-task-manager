import React, { useEffect, useState } from 'react'
import UserContext from './Context'

const App = (props) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const logIn = (user) => {
  setUser({
    ...user,
    loggedIn: true
  })
}

  const logOut = () => {
    setUser({
      loggedIn: false,
      user: null
    })
  }

  useEffect(() => {
    fetch('http://localhost:9999/api/user/verify-user', {
      method: 'GET',
      credentials: 'include'
    }).then((res) => {
      if(res.ok) {
        return res.json()
      } else {
        logOut()
      }
    }).then((user) => {
      if(user) {
        logIn(user)
        setLoading(false)
      }
    }).catch(err => console.error(err))
  }, [])

  if (loading === null) {
    return (
      <div>LOADING</div>
    )
  }

  return (
    <UserContext.Provider value={{
      user,
      logIn,
      logOut,
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default App
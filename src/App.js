import React, { useEffect, useState } from 'react'
import UserContext from './Contexts/Context'

const App = (props) => {

const [user, setUser] = useState(null)
const [loggedIn, setLogged] = useState(null)
const [update, setUpdate] = useState(false)

const logIn = (user) => {
  setLogged(true)
  setUser(user)
}

  const logOut = () => {
    setUser(null)
    setLogged(false)
  }

  const updateTrigger = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    fetch('http://localhost:9999/api/user/verify-user', {
      method: 'GET',
      credentials: 'include'
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      } else {
        logOut()
      }
    }).then((user) => {
      if(user) {
        logIn(user)
      }
    }).catch(err => console.error(err))
  }, [update])

  if (loggedIn === null) {
    return (
      <div>LOADING</div>
    )
  }

  return (
    <UserContext.Provider value={{
      loggedIn,
      user,
      logIn,
      logOut,
      updateTrigger
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default App
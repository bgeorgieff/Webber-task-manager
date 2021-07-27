import React from 'react'

const UserContext = React.createContext({
  user: null,
  loggedIn: null,
  logIn: () => {},
  logOut: () => {},
  triggerUpdate: () => {} 
})

export default UserContext
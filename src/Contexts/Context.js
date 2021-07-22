import React from 'react'

const UserContext = React.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  triggerUpdate: () => {} 
})

export default UserContext
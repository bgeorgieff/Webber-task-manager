import React from 'react'
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom'

import HomePage from './pages/home-page/home-page'
import Register from './pages/register/register'
import Login from './pages/login'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/log-in' component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
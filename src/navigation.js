import React from 'react'
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom'

import HomePage from './pages/home-page/home-page'
import Register from './pages/register/register'
import Login from './pages/login'
import NewBoard from './components/new-board'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/log-in' component={Login} />
        <Route path='/create-board' component={NewBoard} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
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
import Workplaces from './pages/workplaces/workplaces'
import CurrentWorkPlace from './pages/board/board'
import EditTask from './pages/edit-task/editTask'
import TaskView from './pages/task-preview/taskView'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/register' component={Register} />
        <Route path='/log-in' component={Login} />
        <Route path='/create-board' component={NewBoard} />
        <Route path='/workplace' component={Workplaces} />
        <Route path='/current-workplace/:id' component={CurrentWorkPlace} />
        <Route path='/edit/task/:id' component={EditTask} />
        <Route path='/view/task/:id' component={TaskView} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
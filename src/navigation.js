import React from 'react'
import {
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom'


import HomePage from './pages/home-page/home-page'
import Register from './pages/register/register'
import Login from './pages/login'
import NewBoard from './components/new-board'
import Workplaces from './pages/workplaces/workplaces'
import CurrentWorkPlace from './pages/board/board'
import EditTask from './pages/edit-task/editTask'
import TaskView from './pages/task-preview/taskView'
import LogOut from './components/logOut'
import MyTaskList from './components/my-task-list'
import ArhiveTask from './components/arhive-task'
import AboutPage from './pages/about'
import BoardArchive from './pages/board-archive/board-archive'

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
        <Route path='/my-tasks/:id' component={MyTaskList} />
        <Route path='/archive-task/:id' component={ArhiveTask} />
        <Route path='/board-archive/:id' component={BoardArchive} />
        <Route path='/log-out' component={LogOut}/>
        <Route path='/about' component={AboutPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
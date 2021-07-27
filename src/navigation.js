import React, { useContext } from 'react'
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
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
import UserContext from './Contexts/Context'

const Navigation = () => {
  const { loggedIn } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => loggedIn ? <Redirect to='/workplace' /> : <HomePage /> } />
        <Route path='/register' render={() => loggedIn ? <Redirect to='/workplace' /> : <Register />} />
        <Route path='/log-in' render={() => loggedIn ? <Redirect to='/workplace' /> : <Login />} />
        <Route path='/create-board' render={() => loggedIn ? <NewBoard /> : <Redirect to='/login' />} />
        <Route path='/workplace' render={() => loggedIn ? <Workplaces /> : <Redirect to='/login' />} />
        <Route path='/current-workplace/:id' render={() => loggedIn ? <CurrentWorkPlace /> : <Redirect to='/login' /> } />
        <Route path='/edit/task/:id' render={() => loggedIn ? <EditTask /> : <Redirect to='/login' />} />
        <Route path='/view/task/:id' render={() => loggedIn ? <TaskView /> : <Redirect to='/login' />} />
        <Route path='/my-tasks/:id' render={() => loggedIn ? <MyTaskList /> : <Redirect to='/login' />} />
        <Route path='/archive-task/:id' render={() => loggedIn ? <ArhiveTask /> : <Redirect to='/login' />} />
        <Route path='/board-archive/:id' render={() => loggedIn ? <BoardArchive /> : <Redirect to='/login' />} />
        <Route path='/log-out' render={() => loggedIn ? <LogOut /> : <Redirect to='/login' />} />
        <Route path='/about' component={AboutPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation
const getNavigation = (user, boardId) => {
  const authLinks = [
    {
      title: 'Create Board',
      link: '/create-board'
    },
    {
      title: 'Visit Board',
      link: `/visit-board/${boardId}`
    }, 
    {
      title: 'Create Task',
      link: '/create-task'
    }, 
    {
      title: 'About',
      link: '/about'
    }
  ]

  const guestLinks = [
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Log In',
      link: '/log-in'
    },
    {
      title: 'Register',
      link: '/register'
    },
  ]

  const loggedIn = user && user.loggedIn

  return loggedIn ? authLinks : guestLinks
}

export default getNavigation
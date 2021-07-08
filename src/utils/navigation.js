const getNavigation = (user, boardId) => {
  const authLinks = [
    {
      title: 'Log Out',
      link: '/log-out'
    },
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
    },
    {
      title: 'Home',
      link: '/'
    },
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
        {
      title: 'Home',
      link: '/'
    },
  ]

  const loggedIn = user && user.loggedIn

  return loggedIn ? authLinks : guestLinks
}

export default getNavigation
const getNavigation = (user) => {
  const authLinks = [
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Log Out',
      link: '/log-out'
    },
    {
      title: 'Create Board',
      link: '/create-board'
    },
    {
      title: 'Workplaces',
      link: `/workplace`
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

  const loggedIn = user.user && user.user.loggedIn

  return loggedIn ? authLinks : guestLinks
}

export default getNavigation
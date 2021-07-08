import React from 'react'
import styled from 'styled-components'
import getNavigation from '../../utils/navigation'
import Link from '../navLinks'

const Navbar = styled.header`
  width: 100%;
  background-color: #8B008B;
  display: flex;
  flex-direction: row-reverse
`

const Header = () => {

  const user = '' //TODO - ADD USER STATE HERE
  const links = getNavigation(user)

  return (
    <Navbar>
      {
        links.map(e => <Link key={e.title} href={e.link} title={e.title} type='header' />) 
      }
    </Navbar>
  )

}

export default Header
import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../../Contexts/Context'
import getNavigation from '../../utils/navigation'
import Link from '../navLinks'

const Navbar = styled.header`
  width: 100%;
  background-color: #8B008B;
  display: flex;
  flex-direction: row-reverse;
  position: fixed;
  top: 0;
  z-index: 50;
  margin-bottom: 20em;
`

const Header = () => {
  const context = useContext(UserContext)

  const links = getNavigation(context)

  return (
    <Navbar>
      {
        links.map(e => <Link key={e.title} href={e.link} title={e.title} type='header' />) 
      }
    </Navbar>
  )

}

export default Header
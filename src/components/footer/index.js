import React, { useContext } from 'react'
import styled from 'styled-components'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'
import Link from '../navLinks'

const Container = styled.footer`
  width: 100%;
  background-color: black;
  color: #234465;
  border-top: 2px solid #234465;
  border-bottom: 2px solid #234465;
  margin-top: auto;
  display: flex;
  position: absolute;
  bottom: 0
`

const Footer = () => {
  const user = useContext(UserContext)

  const links = getNavigation(user)

  return (
    <Container>
        {
          links.map(e => <Link key={e.title} href={e.link} title={e.title} />)
        }
    </Container>
  )
}

export default Footer
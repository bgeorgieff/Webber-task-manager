import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Container = styled.div`
  display: flex
`

const navStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '8px',
  fontWeight: 700,
}

const navLink = ({title, href}) => {
  
  return (
    <Container>
      <Link style={navStyle} to={href}>
        {title}
      </Link>
    </Container>
  )
}

export default navLink
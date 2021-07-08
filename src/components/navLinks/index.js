import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display: flex
`

const Links = styled.a`
  color: white;
  text-decoration: none;
  margin: 8px;
  font-weight: 700;
`

const navLink = ({title, href}) => {
  
  return (
    <Container>
      <Links href={href}>
        {title}
      </Links>
    </Container>
  )
}

export default navLink
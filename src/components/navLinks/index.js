import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Container = styled.div`
  display: flex
`

// const style = {
//   color: white;
//   text-decoration: none;
//   margin: 8px;
//   font-weight: 700;
// }


const navLink = ({title, href}) => {
  
  return (
    <Container>
      <Link to={href}>
        {title}
      </Link>
    </Container>
  )
}

export default navLink
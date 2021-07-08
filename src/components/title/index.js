import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  font-size: 34px;
  padding: 8px;
`

const Title = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

export default Title
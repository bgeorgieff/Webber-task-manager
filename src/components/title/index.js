import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  font-size: 34px;
  padding: 8px;
`

const Title = ({ title, style }) => {
  return (
    <Header style={style}>{title}</Header>
  )
}

export default Title
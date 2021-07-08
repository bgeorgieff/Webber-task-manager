import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 12px 24px 12px 24px;
  background-color: black;
  color: white;
  font:inherit;
  border-radius: 12px;
`

const Submit = ({title}) => {
  return (
    <div>
      <Button>{title}</Button>
    </div>
  )
}

export default Submit
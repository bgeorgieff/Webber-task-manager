import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  padding: 20px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
`

const InputField = styled.input`
  padding: 10px 24px 10px 24px;
  border-radius: 8px;
  width: 100%;
`

const Label = styled.label`
  display: block;
  text-align: left;
  font: inherit;
  margin-bottom: 8px
`

const Input = ({label, type, id, value, onChange }) => {
  return (
    <Container>
        <Label htmlFor={id}>
          {label}:
        </Label>
        <InputField type={ type || 'text'} id={id} value={value} onChange={onChange} placeholder={label}/>
    </Container>
  )
}

export default Input
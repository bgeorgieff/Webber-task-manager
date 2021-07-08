import React, { useState } from 'react'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import Submit from '../../components/submit'
import styled from 'styled-components'

const Form = styled.form`
  text-align: center;
  margin-top: 5%;
`

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRepassword] = useState('')

  const handleSubmit = () => {
    //TODO
  }

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit}> 
        <Title title="Register" />
        <Input 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          label="Username"
          id="username" />
        <Input 
          type="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          label="Password"
          id="password" />
        <Input 
          type="password"
          value={rePassword}
          onChange={(e) => {setRepassword(e.target.value)}}
          label="Repeat Password"
          id="repeat-password" />
        <Submit title="Register" />
      </Form>
    </PageWrapper>
  )
}

export default Register
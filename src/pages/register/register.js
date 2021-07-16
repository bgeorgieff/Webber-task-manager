import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import Submit from '../../components/submit'
import styled from 'styled-components'
import UserContext from '../../Contexts/Context'
import authenticate from '../../utils/auth'

const Form = styled.form`
  text-align: center;
  margin-top: 5%;
`

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRepassword] = useState('')
  const history = useHistory()

  const context = useContext(UserContext)


  const handleSubmit = async (event) => {
    event.preventDefault()
    
    await authenticate('http://localhost:9999/api/user/register', {
      username,
      password,
      rePassword
    }, (user) => {
      context.logIn(user)
      history.push('/workplace')
    }, (e) => {
      console.log('Register error', e);
    })
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
import React, { useState, useContext } from 'react'
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

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(UserContext)
  const history = useHistory()


  // TODO check behaviour after implementation of AUTH on APP comp
  const handleSubmit = async (event) => {
    event.preventDefault()

    await authenticate('http://localhost:9999/api/user/login', {
      username,
      password
    }, (user) => {
      context.logIn(user)
      history.push('/')
      // console.log(user);
      // console.log(context.logIn);
    }, (e) => {
      console.log('Log In Error', e)
    })
  }

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit}> 
        <Title title="Log In" />
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
        <Submit title="Log In" />
      </Form>
    </PageWrapper>
  )
}

export default Login
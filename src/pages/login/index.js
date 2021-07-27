import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import Submit from '../../components/submit'
import styled from 'styled-components'
import UserContext from '../../Contexts/Context'
import authenticate from '../../utils/auth'
import {loginVerification} from '../../verifications/user'

const Form = styled.form`
  text-align: center;
  margin-top: 5%;
  position: relative;
`

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const context = useContext(UserContext)
  const history = useHistory()
  const [verifiedUser, setVerifiedUser] = useState(true)
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const verified = loginVerification(username, password)

    if(!verified) {
      setVerifiedUser(false)
    } else {
      setVerifiedUser(true)
    }

    try {
      await authenticate('http://localhost:9999/api/user/login', 
      {
        username,
        password
      }, 
      context, 
      setError,
      history)

    } catch (e) {
      console.error(e);
    }
    
  }

  return (
    <PageWrapper>
      {error || !verifiedUser ? 
      <div style={{marginLeft: 'auto', marginRight:'auto', textAlign: 'center', width: '100%'}}>Your input is wrong</div> 
      : null}
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
        <div style={{marginTop: '24px'}}>
          <Submit title="Log In" />
        </div>
      </Form>
    </PageWrapper>
  )
}

export default Login
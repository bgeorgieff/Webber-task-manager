import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import Input from '../../components/input'
import Submit from '../../components/submit'
import styled from 'styled-components'
import UserContext from '../../Contexts/Context'


const Form = styled.form`
text-align: center;
margin-top: 5%;
`

const ButtonContainer = styled.div`
  margin-top: 26px;
`

const ErrorDiv = styled.span`
  display: inline-block;
  margin-top: 18px; 
  background-color:RGBA(255,101,80,0.4);
  font-size: 18px;
  padding: 8px;
  width: 100%
`

const NewBoard = () => {

  const [boardName, setBoardName] = useState('')
  const [error, setError] = useState(false)

  const context = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    if(boardName) {
      await fetch('http://localhost:9999/api/board/create', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          name: boardName,
          author: context.user._id
        }),
        headers: {
          'Content-type': 'application/json'
        },
      })
      
      history.push('/workplace')
    } else {
      setError(true)
    }
  }

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit}> 
        <Title title="Create Board" />
        {error ? <ErrorDiv>You Must Choose A Name</ErrorDiv> : null}
        <div style={{padding: '8px'}}>
          <p style={{font: 'inherit', fontSize: '18px'}}>Here you can create new Project boards</p>
        </div>
        <Input 
          value={boardName}
          onChange={(e) => {setBoardName(e.target.value)}}
          label="Write Your Board Name"
          id="boardName" />
        <ButtonContainer>
          <Submit title="Create" />
        </ButtonContainer>
      </Form>
    </PageWrapper>
  )
}

export default NewBoard
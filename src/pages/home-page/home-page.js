import React from 'react'
import styled from 'styled-components'
import PageWrapper from '../../components/page-wrapper'

const Container = styled.div`
  background-image: url('https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height:90vh;
  font-size: 32px;
  display: block;
`

const TextContainer = styled.div`
  font-size: inherit;
  text-transform: capitalize;
  position: absolute;
  transform: translate(80px, 150%);
`

const HeaderText3 = styled.h3`
  margin: 0;
  text-align: center;
  font-size: 48px;
`

const Paragraph = styled.div`
  text-align: center;
  padding: 24px;
`

const Button = styled.a`
  text-decoration: none; 
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 8px 38px 8px 38px;
  width: 60%;
  margin: 0 auto;
`

const ButtonDiv = styled.div`
  padding: 12px;
  text-align:center
`

const HomePage = () => {
  return (
    <PageWrapper>
      <Container>
        <TextContainer>
          <HeaderText3>Weave your tasks with ease</HeaderText3>
          <Paragraph>Create your free account today!</Paragraph>
          <ButtonDiv>
            <Button href="/register">Sign Up</Button>
          </ButtonDiv>
        </TextContainer>
      </Container>
    </PageWrapper>
  )
}

export default HomePage
import React, { useContext } from 'react'
import styled from 'styled-components'


const Container = styled.footer`
  width: 100%;
  padding: 15px;
  background-color: black;
  color: #234465;
  border-top: 2px solid #234465;
  border-bottom: 2px solid #234465;
  margin-top: auto;
  display: flex;
`

const Para = styled.p`
  color: white;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`
const RedHeart = styled.span`
  color: red;
`

const Footer = () => {
  return (
    <Container>
       <Para>Created with <RedHeart>&#10084;</RedHeart> by Blagovest Georgiev</Para>
    </Container>
  )
}

export default Footer
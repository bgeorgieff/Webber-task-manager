import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  padding: 20px 20px;
  background: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

const Footer = () => {
  return (
    <Box>
      <footer>
        <h3 style={{ color: "white", textAlign: "center"}}>
          Created with <span style={{color: 'red'}}>&#10084;</span> by Blagovest Georgiev
        </h3>
      </footer>
    </Box>
    // <div></div>
  )
}

export default Footer
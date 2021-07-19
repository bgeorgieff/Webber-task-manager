import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  min-height:100%;
`

const PageWrapper = (props) => {
  return (
    <WrapperContainer>
      <Header />
      <div style={{paddingBottom: '5em', paddingTop: '5em'}}>
        {props.children}
      </div>
      <Footer />
    </WrapperContainer>
  )
}

export default PageWrapper
import React, { useEffect, useState } from 'react'
import PageWrapper from '../../components/page-wrapper'
import getAllBoards from '../../utils/boards'
import Boards from '../../components/boards'
import Title from '../../components/title'
import styled from 'styled-components'

const TitleWrapper = styled.div`
  margin: 16px;
`

const Workplaces = () => {
  const [workplaces, setWorkplaces] = useState([])

  const allBoards = async () => {
    const boards = await getAllBoards()
    
    setWorkplaces(boards)
  }

  const renderBoards = () => {
    return workplaces.map((e) => {
      return (
        <Boards key={e._id} {...e}/>
      )
    })
  }

  useEffect(() => {
    allBoards()
  }, [])

  return ( 
    <PageWrapper>
      <TitleWrapper>
        <Title title='Select your working place'/>      
      </TitleWrapper>
      <div style={{display: 'flex'}}>
        {renderBoards()}
      </div>
    </PageWrapper>
  )
}

export default Workplaces
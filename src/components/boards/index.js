import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import WorkPlaceContext from '../../Contexts/Workplace'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px;
  background-color: black;
  margin: 8px;
  text-decoration: none;
  color: white;
  text-align: center;
  border-radius: 4px;
  flex-wrap: wrap;
`

const Boards = ({name, _id}) => {
  const context = useContext(WorkPlaceContext)

  const handleClick = () => {
    context.workplace = name
    context.id = _id
  }

  return (
    <div>
      <Container>
        <Link style={{textDecoration: 'inherit', color: 'inherit', textAlign: 'inherit', fontSize: '46px'}} to={`/current-workplace/${_id}`} onClick={() => handleClick()}>#{name}</Link>
      </Container>
    </div>
  )
}

export default Boards
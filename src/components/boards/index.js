import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import WorkPlaceContext from '../../Contexts/Workplace'

const Container = styled.div`
  display: inline-block;
  padding: 8px;
  background-color: black;
  margin: 8px;
  width: 25%;
  text-decoration: none;
  color: white;
  text-align: center;
  border-radius: 4px;
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
        <Link style={{textDecoration: 'inherit', color: 'inherit', textAlign: 'inherit'}} to={`/current-workplace/${_id}`} onClick={() => handleClick()}>{name}</Link>
      </Container>
    </div>
  )
}

export default Boards
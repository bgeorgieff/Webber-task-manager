import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import WorkPlaceContext from '../../Contexts/Workplace'

const Container = styled.div`
  display: flex;
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
        <Link to={`/current-workplace/${_id}`} onClick={() => handleClick()}>{name}</Link>
      </Container>
    </div>
  )
}

export default Boards
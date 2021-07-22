import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import WorkPlaceContext from '../../Contexts/Workplace'
import UserContext from '../../Contexts/Context'

const Container = styled.div`

  padding: 40px;
  background-color: black;
  margin: 8px;
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
        <div>
          <Link style={{textDecoration: 'inherit', color: 'inherit', textAlign: 'inherit', fontSize: '46px'}} to={`/current-workplace/${_id}`} onClick={() => handleClick()}>#{name}</Link>
        </div>
        <div>
          <Link style={{color: 'inherit', textAlign: 'inherit', fontSize: '18px'}} to={`/current-workplace/${_id}`} >#BoardArchive</Link><span>, </span>
          <Link style={{color: 'inherit', textAlign: 'inherit', fontSize: '18px'}} to={`/current-workplace/${_id}`} >#BoardName</Link><span>, </span>
          <Link style={{color: 'inherit', textAlign: 'inherit', fontSize: '18px'}} to={`/my-tasks/${sessionStorage.getItem('id')}&boarId=${_id}`} >#MyTasks</Link>
        </div>
      </Container>
    </div>
  )
}

export default Boards
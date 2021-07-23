import React, { useContext, useState } from 'react'
import { MdBorderBottom } from 'react-icons/md'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import WorkPlaceContext from '../../Contexts/Workplace'
import BoardNameModal from '../board-name-modal'

const Container = styled.div`
  padding: 40px;
  background-color: black;
  margin: 8px;
  text-decoration: none;
  color: white;
  text-align: center;
  border-radius: 4px;
  transition: 0.3s ease;
  :hover {
    background-color: #8b008b;
  }
`

const Boards = ({name, _id}) => {
  const context = useContext(WorkPlaceContext)
  const [showModal, setShowModal] = useState(false)

  
  const openModal = () => {
    setShowModal( prev => !prev)
  }


  const handleClick = () => {
    context.workplace = name
    context.id = _id
  }

  // console.log(_id);

  return (
    <div>
      <Container>
        <div style={{borderBottom: '3px solid white', marginBottom: '18px'}}>
          <Link style={{
            textDecoration: 'inherit', 
            color: 'inherit', 
            textAlign: 'inherit', 
            fontSize: '46px',
            fontWeight: '700'}} to={`/current-workplace/${_id}`} onClick={() => handleClick()}>#{name}</Link>
        </div>
        <div>
          <div>
            <Link style={{
              color: 'inherit', 
              textAlign: 'inherit', 
              fontSize: '18px'}} to={`/board-archive/${_id}`} >#ProjectArchive</Link><span>, </span>
          </div>
          <div>
            <Link style={{
              color: 'inherit', 
              textAlign: 'inherit', 
              fontSize: '18px'}} to={`/my-tasks/${sessionStorage.getItem('id')}&boarId=${_id}`} >#MyTasks</Link><span>, </span>
          </div>
          <div>
            <Link style={{
              color: 'inherit', 
              textAlign: 'inherit', 
              fontSize: '18px'}} onClick={openModal} >#EditProjectName</Link><span>, </span>
            <BoardNameModal boardId={_id} showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Boards
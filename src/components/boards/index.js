import React, { useContext, useState } from 'react'
import { MdBorderBottom } from 'react-icons/md'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../../Contexts/Context'
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

const Option = styled.div`
  background-color: inherit;
  transition: 0.3s ease;
  border-radius: 6px;
  :hover {
    background-color: #13385b;
  }
`

const ProjectNameContainer = styled.div`
  border-bottom: 3px solid white;
  margin-bottom: 18px;
  transition: 0.3s ease;
  border-radius: 6px;
  :hover {
    background-color: #ed1d24;
  }
`

const Boards = ({name, _id}) => {
  const context = useContext(WorkPlaceContext)
  const userContext = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)

  
  const openModal = () => {
    setShowModal( prev => !prev)
  }


  const handleClick = () => {
    context.workplace = name
    context.id = _id
  }


  return (
    <div>
      <Container>
        <ProjectNameContainer>
          <Link style={{
            textDecoration: 'inherit', 
            color: 'inherit', 
            textAlign: 'inherit', 
            fontSize: '46px',
            fontWeight: '700'}} to={`/current-workplace/${_id}`} onClick={() => handleClick()}>#{name}</Link>
        </ProjectNameContainer>
        <div>
          <Option>
            <Link style={{
              color: 'inherit', 
              textAlign: 'inherit', 
              fontSize: '18px'}} to={`/board-archive/${_id}`} >#ProjectArchive</Link><span>, </span>
          </Option>
          <Option>
            <Link style={{
              color: 'inherit', 
              textAlign: 'inherit', 
              fontSize: '18px'}} to={`/my-tasks/${userContext.user._id}&boarId=${_id}`} >#MyTasks</Link><span>, </span>
          </Option>
          <Option>
            <Link style={{
              color: 'inherit', 
              textAlign: 'inherit', 
              fontSize: '18px'}} onClick={openModal} >#EditProjectName</Link><span>, </span>
            <BoardNameModal boardId={_id} showModal={showModal} setShowModal={setShowModal} />
          </Option>
        </div>
      </Container>
    </div>
  )
}

export default Boards
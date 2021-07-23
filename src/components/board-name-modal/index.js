import React, { useRef, useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import { MdClose } from 'react-icons/md'
import Title from '../../components/title'
import Submit from '../../components/submit'
import changeProjectName from '../../utils/changeProjectName'

const Background = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalWrapper = styled.div`
  width: 450px;
  height: 280px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`
const Form = styled.form`
  text-align: center;
  margin-top: 5%;
`
const TextArea = styled.textarea`
  width: 400px;
  height: 50px;
  margin-left: auto;
  resize: none;
`

const TextContainer = styled.div`
  margin: 20px;
`

const BoardNameModal = ({showModal, setShowModal, boardId}) => {

  const [newName, setNewName] = useState('')

  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translate(-0, -150%)` : `translate(-0%, -100%)`
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log(`It's pressed`)
      }
    },
    [setShowModal, showModal]
  )

  const handleSubmit = async (event) => {
    event.preventDefault()

    await changeProjectName('http://localhost:9999/api/board/change-name', {
      boardId,
      name: newName
    })

    setNewName('')

    setShowModal(prev => !prev)
  }

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    },
    [keyPress]
  )

  return (
    <div>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <Form onSubmit={handleSubmit}> 
                  <Title style={{textAlign: 'left'}} title="Change Project Name" />
                  <TextContainer>
                    <TextArea value={newName} onChange={(e) => {setNewName(e.target.value)}} />
                  </TextContainer>
                  <Submit title="Submit" />
                </Form>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </div>
  )
}

export default BoardNameModal
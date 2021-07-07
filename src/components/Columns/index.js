import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Tasks from '../Tasks'

const Container = styled.div`
  margin: 8px;
  width: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 2px;
`
const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  padding: 8px
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.isDraggingOver ? '#fdfcf3' : 'white'};
  flex-grow: 1;
  min-height: 100px;
`

const Column = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {provided => 
        <Container {...provided.draggableProps} ref={provided.  innerRef}>
          <Title {...provided.dragHandleProps}>
            {props.column.title}
          </Title>
          <Droppable droppableId={props.column.id} type='tasks'>
            {(provided, snapshot) => 
              <TaskList
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {props.tasks.map((task, index) => 
                  <Tasks key={task.id} task={task} index={index}/>
                )}
                {provided.placeholder}
              </TaskList>
            }
          </Droppable>
        </Container>
      }
    </Draggable>

  )
}

export default Column
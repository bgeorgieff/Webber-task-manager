import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableData = styled.td`
padding: 1vh 10vh 1vh 10vh;
border: 1px solid black
`

const Para = styled.p`
text-align: center
`

const TaskContainer = (props) => {

  return (
    <tr>
      <TableData>
        <Para>{props.title}</Para>
      </TableData>
      <TableData>
        <Para>{props.author}</Para>
      </TableData>
      <TableData>
        <Para>{props.startDate}</Para>
      </TableData>
      <TableData>
        <Para>{props.endDate}</Para>
      </TableData>
      <TableData>
        <Para>{props.assignedTo}</Para>
      </TableData>
      <TableData>
        <div>
          <Link to={`/edit/task/${props.taskId}`}>Edit</Link>
        </div>
        <div>
          <Link to={`/delete/task/${props.taskId}`}>Delete</Link>
        </div>
      </TableData>
      <TableData>
        <div>
          <Link to={`/view/task/${props.taskId}`}>View</Link>
        </div>
      </TableData>
    </tr>
  )
}

export default TaskContainer
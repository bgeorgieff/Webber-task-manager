import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Table = styled.table`
width: 600px;
margin-left: auto;
margin-right: auto;
`

const TableData = styled.td`
padding: 10px;
border: 1px solid black
`

const H4 = styled.h4`
text-align: center
`

const Para = styled.p`
text-align: center
`

const TaskContainer = (props) => {
  // console.log(props, 'in task container')

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <TableData>
              <H4>Task Name</H4>
              <Para>{props.title}</Para>
            </TableData>
            <TableData>
              <H4>Created By</H4>
              <Para>{props.author}</Para>
            </TableData>
            <TableData>
              <H4>Start Date</H4>
              <Para>{props.startDate}</Para>
            </TableData>
            <TableData>
              <H4>End Date</H4>
              <Para>{props.endDate}</Para>
            </TableData>
            <TableData>
              <H4>Assigned To</H4>
              <Para>{props.assignedTo}</Para>
            </TableData>
            <TableData>
              <H4>Options</H4>
              <div>
                <Link to={`/edit/task/${props.taskId}`}>Edit</Link>
              </div>
              <div>
                <Link to={`/delete/task/${props.taskId}`}>Delete</Link>
              </div>
            </TableData>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TaskContainer
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import moment from 'moment'

const TableData = styled.td`
  border: 1px solid black;
`

const Para = styled.p`
  text-align: center;
  padding: 1vh 5vh 1vh 5vh;
`

const TaskContainer = (props) => {
  const [lessThanThreeDays, setLessThanThreeDays] = useState(false)
  const [overdue, setOverdue] = useState(false)
  const [moreThanAWeek, setMoreThenAWeek] = useState(false)
  const params = useParams()

  const formattedStartDate = moment(props.startDate).format('LL')
  const formattedEndDate = moment(props.endDate).format('LL')
  const diff = moment(props.startDate).diff(props.endDate, 'days')

  const getDiff = () => {
    if(diff >= 0) {
      setOverdue(true)
      return
    }

    if(diff >= -3) {
      setLessThanThreeDays(true)
      return
    }

    if(diff <= -4) {
      setMoreThenAWeek(true)
      return
    }
  }

  useEffect(() => {
    getDiff()
  }, [])

  return (
    <tr>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <Para>{props.title}</Para>
      </TableData>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <Para>{props.author}</Para>
      </TableData>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <Para>{formattedStartDate}</Para>
      </TableData>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <Para>{formattedEndDate}</Para>
      </TableData>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <Para>{props.assignedTo}</Para>
      </TableData>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <div>
          <Para>
            <Link to={`/archive-task/${props.taskId}&boarId=${params.id}`}>Archive Task</Link>
          </Para>
        </div>
      </TableData>
      <TableData style={ lessThanThreeDays ? {backgroundColor: 'yellow'} : {} &&  
        overdue ? {backgroundColor: 'red'} : {} && moreThanAWeek ? { backgroundColor: 'white'} : {}
      }>
        <div>
          <Para>
            <Link to={`/view/task/${props.taskId}`}>View</Link>
          </Para>
        </div>
      </TableData>
    </tr>
  )
}

export default TaskContainer
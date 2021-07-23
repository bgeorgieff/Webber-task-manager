import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styled from 'styled-components'
import moment from 'moment'
import taskBoard from '../../utils/taskBoard'

const Table = styled.table`
  margin-top:25px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

const TableData = styled.td`
  border: 1px solid black;
`

const Para = styled.p`
  text-align: center;
  padding: 1vh 5vh 1vh 5vh;
`

const BoardArchive = (props) => {

  const [archivedTasks, setArchivedTasks] = useState()
  const [taskList, setTaskList] = useState(false)

  const getCurrentArchive = async () => {
    const board = await taskBoard(props.match.params)

    if(board[0].taskHistory.length > 0) {
      setArchivedTasks(board[0].taskHistory)
      setTaskList(true)
    }
  }


  useEffect(() => {
    getCurrentArchive()
  }, [taskList])

  return (
    <PageWrapper>
      <Title title={'Archived Tasks from project'} />
      { taskList ? 
      <Table>
        <thead>
          <tr>
            <th>
              Task Name:
            </th>
            <th>
              Assigned By:
            </th>
            <th>
              Start Date:
            </th>
            <th>
              Due Date:
            </th>
            <th>
              Assigned To:
            </th>
            <th>
              Details:
            </th>
          </tr>
        </thead>
        { archivedTasks ? archivedTasks.map((e) => 
        <tbody>
          <tr>
            <TableData>
              <Para>{e.name}</Para>
            </TableData>
            <TableData>
              <Para>{e.author.username}</Para>
            </TableData>
            <TableData>
              <Para>{moment(e.startDate).format('LL')}</Para>
            </TableData>
            <TableData>
              <Para>{moment(e.endDate).format('LL')}</Para>
            </TableData>
            <TableData>
              <Para>{e.assignedTo.username}</Para>
            </TableData>
            <TableData>
              <div>
                <Para>
                  <Link key={e.id} to={`/view/task/${e._id}`}>View</Link>
                </Para>
              </div>
            </TableData>
          </tr>
        </tbody>
        ) : null }
      </Table> : <p>There are no archived tasks</p>}
    </PageWrapper>
  )
}

export default BoardArchive
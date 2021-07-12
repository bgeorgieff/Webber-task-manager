const getAllBoards = async () => {
  const promise = await fetch('http://localhost:9999/api/board/all', {
    method: 'GET'
  })
  const board = await promise.json()

  return board
}

export default getAllBoards
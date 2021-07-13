const taskBoard = async (body) => {

  try {
    const promise = await fetch('http://localhost:9999/api/board/current', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })

    const response = await promise.json()

    return response
  } catch (e) {
    console.error(e);
  }

}

export default taskBoard
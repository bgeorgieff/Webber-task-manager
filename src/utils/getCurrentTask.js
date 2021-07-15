const getCurrentTask = async (url, body) => {
  try {
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    })
  
    const response = await promise.json()

    return response
  } catch (e) {
    console.error(e)
  }
}

export default getCurrentTask
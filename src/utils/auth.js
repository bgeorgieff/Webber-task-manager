const authenticate = async (url, body, onSuccess, onFailure) => {
  try {
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })

    const response = await promise.json()

    if(promise.ok) {
      return onSuccess({
        username: response.username,
        id: response._id
      })
    } else {
      onFailure()
    }
  } catch(e) {
    onFailure(e)
  }
}

export default authenticate
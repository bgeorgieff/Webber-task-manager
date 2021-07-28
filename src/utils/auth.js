const authenticate = async (url, body, context, setError, history) => {
  try {
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    })

    if(promise.ok) {
      const response = await promise.json()

      if(typeof response === 'object') {
        context.logIn(response)
        history.push('/workplace')
        setError(false)
      } else {
        setError(true)
      }
    } else {
      setError(true)
    }
  } catch(e) {
    console.error(e)
  }
}

export default authenticate
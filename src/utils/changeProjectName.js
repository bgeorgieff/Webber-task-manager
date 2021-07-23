const changeProjectName = async (url, body) => {
  const promise = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json'
    }
  })

  const response = promise.json()
  
  return response
}

export default changeProjectName
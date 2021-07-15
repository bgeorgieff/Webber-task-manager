const submitEdit = async (url, body) => {

  try {
    const promise = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    })
    
    const res = await promise.json()

    console.log(res)
  } catch (e) {
    console.error(e)
  }
}

export default submitEdit
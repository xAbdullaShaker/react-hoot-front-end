const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

const show = async (hootId) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

const create = async (formData) => {
  try {
    const token = localStorage.getItem('token')

    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData)
    })

    const data = await res.json()
    return data

  } catch (err) {
    console.log(err)
  }
}

export {
  index,
  show,
  create,
}
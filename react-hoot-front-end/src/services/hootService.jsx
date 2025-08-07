const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`

const index = async () => {
  try {
    console.log('inside hoot index function')
  } catch (err) {
    console.log(err)
  }
}

export {
  index,
}
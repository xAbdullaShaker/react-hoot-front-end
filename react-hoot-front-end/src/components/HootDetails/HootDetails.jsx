import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as hootService from '../../services/hootService'

const HootDetails = () => {

  const { hootId } = useParams()

  const [hoot, setHoot] = useState()
  
  useEffect(() => {
    // fetch a single hoot
    const fetchHoot = async () => {
      // call the hoot service
      const hootData = await hootService.show(hootId)
      setHoot(hootData)
    }
    fetchHoot()
  }, [])

  return (
    <main>
      Hoot Details
      <br/>
      {hootId}
    </main>
  )
}

export default HootDetails
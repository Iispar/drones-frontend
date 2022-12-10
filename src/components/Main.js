import { useState, useEffect }  from 'react'
import droneService from '././services/DroneService'

const Main = () => {
    const [drones, setDrones] = useState([])


    useEffect(() => {
        droneService.getAll().then(droneInfo =>
          setDrones( droneInfo )
        )
      }, [])

    return (
        <>
            {drones}
        </>
    )
}

export default Main
import React, { useState, useEffect } from 'react'
import droneService from '../services/DroneService'
import Drone from './Drone'

const Main = () => {
  const [drones, setDrones] = useState([])
  const [listOfPilots, setListOfPilots] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      droneService.getAll().then(droneInfo =>
        setDrones(droneInfo))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const getKeys = (list, drone) => {
    const keys = []
    for (const i in list) {
      keys.push(list[i].key)
    }
    return keys
  }

  const printDrones = (drones) => {
    console.log('ran')
    if (drones.length === 0) {
      return (
        <h1> Waiting for data </h1>
      )
    }
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(drones, 'text/xml')
    const droneInfo = xmlDoc.getElementsByTagName('drone')

    for (let i = 0; i < droneInfo.length; i++) {
      const serialNumber = droneInfo[i].getElementsByTagName('serialNumber')[0].childNodes[0].nodeValue
      const drone = <Drone
                        key = {serialNumber}
                        x = {droneInfo[i].getElementsByTagName('positionX')[0].childNodes[0].nodeValue}
                        y = {droneInfo[i].getElementsByTagName('positionY')[0].childNodes[0].nodeValue}
                        serialNumber = {serialNumber}
                    />
      if (!(getKeys(listOfPilots).includes(drone.key))) {
        setListOfPilots(oldArray => [...oldArray, drone])
      }
    }

    return (
      <div id = "droneInfo-container">
        {listOfPilots}
      </div>
    )
  }

  return (
    <div>
      {printDrones(drones)}
    </div>
  )
}

export default Main

import React, { useState, useEffect } from 'react'
import droneService from '../services/DroneService'
import Drone from './Drone'
import distanceFromMiddle from './Helpers'

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

  const getKeys = (list) => {
    const keys = []
    for (const i in list) {
      keys.push(list[i].key)
    }
    return keys
  }

  const getDistance = (key, list) => {
    for (const i in list) {
      if (list[i].key === key) {
        return distanceFromMiddle(list[i].props.x, list[i].props.y)
      }
    }
    return false
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
      } else if (getDistance(drone.key, listOfPilots) > distanceFromMiddle(drone.props.x, drone.props.y)) {
        const index = getKeys(listOfPilots).indexOf(drone.key)
        const newList = listOfPilots.map((previous, i) => {
          if (i === index) {
            // Increment the clicked counter
            return drone
          } else {
            // The rest haven't changed
            return previous
          }
        })
        setListOfPilots(newList)
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

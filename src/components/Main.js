import React, { useState, useEffect } from 'react'
import droneService from '../services/DroneService'
import Drone from './Drone'

const Main = () => {
  const [drones, setDrones] = useState([])

  useEffect(() => {
    droneService.getAll().then(droneInfo =>
      setDrones(droneInfo))
  }, [])

  const printDrones = (drones) => {
    if (drones.length === 0) {
      return (
        <h1> Waiting for data </h1>
      )
    }
    const parser = new DOMParser()
    const rows = []
    const xmlDoc = parser.parseFromString(drones, 'text/xml')
    const droneInfo = xmlDoc.getElementsByTagName('drone')

    for (let i = 0; i < droneInfo.length; i++) {
      const serialNumber = droneInfo[i].getElementsByTagName('serialNumber')[0].childNodes[0].nodeValue
      rows.push(
        <Drone
          key = {serialNumber}
          x = {droneInfo[i].getElementsByTagName('positionX')[0].childNodes[0].nodeValue}
          y = {droneInfo[i].getElementsByTagName('positionY')[0].childNodes[0].nodeValue}
          serialNumber = {serialNumber}
          // pilot = {droneService.getPilot(serialNumber)}
        />
      )
    }
    return (
      <div id = "droneInfo-container">
        {rows}
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

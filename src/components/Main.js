import React, { useState, useEffect } from 'react'
import droneService from '../services/DroneService'
import Drone from './Drone'
import Map from './Map'

const Main = () => {
  const [drones, setDrones] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      droneService.getAll().then(droneInfo =>
        setDrones(droneInfo))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const printDrones = () => {
    if (drones.length === 0) {
      return (
        <div className = "loading-container"> waiting for data... </div>
      )
    }
    const list = []
    for (const i in drones) {
      list.push(<Drone
                  key = {drones[i].serialNumber}
                  distance = {drones[i].distance}
                  serialNumber = {drones[i].serialNumber}
                  positionX = {drones[i].positionX}
                  positionY = {drones[i].positionX}
                  firstName = {drones[i].firstName}
                  lastName = {drones[i].lastName}
                  email = {drones[i].email}
                  number = {drones[i].number}
                />
      )
    }
    return list
  }

  return (
    <div className = "droneinfo-container" id = "droneinfo-container">
      <div className = "allPilots-container" id = "allPilots-container">
        <div className = "pilotlist-container" id = "pilotlist-container">
          {printDrones()}
        </div>
      </div>
      <div className = "right-container" id = "right-container">
        <Map drones = {drones}></Map>
      </div>
    </div>
  )
}

export default Main

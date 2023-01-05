import React, { useState, useEffect } from 'react'
import droneService from '../services/DroneService'
import Drone from './Drone'
import Map from './Map'

/**
 * The main element of the webpage. Constructs the list of pilots and the map.
 * this method only constructs the list, but the map is called in the html.
 * @returns main of webpage
 */
const Main = () => {
  const [drones, setDrones] = useState([])

  // Used a useEffect loop to get the accurate pilot data.
  // Used a interval of 500ms so that resizing the map wouldn't cause
  // a big delay in updating the data on the map.
  useEffect(() => {
    const interval = setInterval(() => {
      droneService.getAll().then(droneInfo =>
        setDrones(droneInfo))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  /**
   * method to display all the pilots that are violating the border.
   * !HOX The filtering of pilot is already done in the backend so
   * we dont have sensitive information of pilot that are not violating the
   * border.
   * @returns a list of all pilots violating the border.
   */
  const printPilots = () => {
    // While we wait for the data to arrive we display a simple wait message.
    if (drones.length === 0) {
      return (
        <div className = "loading-container"> waiting for data... </div>
      )
    }
    const list = []
    for (const i in drones) {
      // we use a list of Drone elements that we display on the screen.
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
          <h2> Pilots that have violated the border </h2>
          {printPilots()}
        </div>
      </div>
      <div className = "right-container" id = "right-container">
        <Map drones = {drones}></Map>
      </div>
    </div>
  )
}

export default Main

import React, { useState } from 'react'
import Pilot from './Pilot'
import $ from 'jquery'

/**
 * Method for displaying the drones that are violating the border
 * on a map.
 * @param list of all pilots/drones violating the border
 * @returns map of drones, nest and the border.
 */
const Map = (list) => {
  const [pilot, setPilot] = useState(<Pilot
                                        firstName = 'default'
                                      />)

  const displayDrones = (list) => {
    const drones = list.drones
    const allLocations = []

    // Draw a circle for every drone that is inside the border.
    for (const i in drones) {
      const scale = $('#map-container').height() / 200
      const x = Math.round(((drones[i].positionX / 1000) - 150) * scale)
      const y = Math.round(((drones[i].positionY / 1000) - 150) * scale)
      const location = <a id = {drones[i].serialNumber} key = {drones[i].serialNumber}>
                        <circle
                          cx = {x}
                          cy = {y}
                          r = {4}
                          className="drone"
                          onMouseOver = {() => setPilot(<Pilot
                            firstName = {drones[i].firstName}
                            lastName = {drones[i].lastName}
                            email = {drones[i].email}
                            number = {drones[i].number}
                            distance = {drones[i].distance}
                            />
                          )}
                          onMouseOut = {() => setPilot(<Pilot
                            firstName = 'default'
                            />
                          )}
                        />
                        </a>
      allLocations.push(location)
    }
    return (allLocations)
  }

  return (
    <div className="mapandpilot-container" id = "mapandpilot-container">
      <div className="map-container" id = "map-container">
        <svg id = "drone-map">
          <circle cx="50%" cy="50%" r="50%" id="circle"/>
          <circle cx="50%" cy="50%" r="5" id="nest"/>
          {displayDrones(list)}
        </svg>
      </div>
      <div className="selectedpilot-container">
        <div className="label" id="pilot-information">
          {pilot}
        </div>
      </div>
    </div>
  )
}

export default Map

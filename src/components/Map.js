import React from 'react'

/**
 * Method for displaying the drones that are violating the border
 * on a map.
 * @param list of all pilots/drones violating the border
 * @returns map of drones, nest and the border.
 */
const Map = (list) => {
  const displayDrones = (list) => {
    const drones = list.drones
    const allLocations = []

    // Draw a circle for every drone that is inside the border.
    for (const i in drones) {
      const scale = document.getElementById('right-container').clientHeight / 200
      const x = Math.round(((drones[i].positionX / 1000) - 150) * scale)
      const y = Math.round(((drones[i].positionY / 1000) - 150) * scale)
      const location = <circle
                          key = {drones[i].serialNumber}
                          cx = {x}
                          cy = {y}
                          r = {3}
                        />
      allLocations.push(location)
    }
    return (allLocations)
  }

  return (
    <div className="map-container" id = "map-container">
      <svg id = "drone-map">
        <circle cx="50%" cy="50%" r="50%" id="circle"/>
        <circle cx="50%" cy="50%" r="1%" id="nest"/>
        {displayDrones(list)}
      </svg>
    </div>
  )
}

export default Map

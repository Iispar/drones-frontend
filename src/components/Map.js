import React from 'react'

const Map = (list) => {
  const displayDrones = (list) => {
    const drones = list.drones
    for (const i in drones) {
      console.log(i)
    }
  }
  return (
    <div className="map-container" id = "map-container">
      <svg id = "drone-map">
        <circle cx="375" cy="375" r="350" id="circle"/>
        <circle cx="375" cy="375" r="5" id="nest"/>
        {displayDrones(list)}
      </svg>
    </div>
  )
}

export default Map

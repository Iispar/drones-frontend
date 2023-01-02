import React from 'react'

const Map = () => {
  return (
    <div className="map-container" id = "map-container">
      <svg id = "drone-map">
        <circle cx="375" cy="375" r="350" id="circle"/>
        <circle cx="375" cy="375" r="5" id="nest"/>
      </svg>
    </div>
  )
}

export default Map

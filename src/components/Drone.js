/* eslint-disable no-unused-vars */
import React from 'react'
import distanceFromMiddle from './Helpers'
import propTypes from 'prop-types'
import droneService from '../services/DroneService'

const Drone = (props) => {
  const x = props.x
  const y = props.y
  const serialNumber = props.serialNumber
  const distance = distanceFromMiddle(x, y)

  const pilot = droneService.getPilot(serialNumber)
  // TODO: get pilot data

  if (distance < 100000) {
    return (
        <p> @@INSIDE X: {x} Y: {y} @@@@ DISTANCE: {distance} SerialNumber: {serialNumber} @@@</p>
    )
  } else {
    return (
        <p> @@OUTSIDE X: {x} Y: {y} @@@@ DISTANCE: {distance} SerialNumber: {serialNumber} @@@</p>
    )
  }
}

Drone.propTypes = {
  x: propTypes.string.isRequired,
  y: propTypes.string.isRequired,
  serialNumber: propTypes.string.isRequired
}

export default Drone

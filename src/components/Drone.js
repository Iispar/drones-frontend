/* eslint-disable no-unused-vars */
import React from 'react'
import propTypes from 'prop-types'

/**
 * Display the information of a single pilot.
 * @param props
 * @returns information of a single pilot.
 */
const Drone = (props) => {
  const distance = Math.round(props.distance / 1000)
  const serialNumber = props.serialNumber
  const firstName = props.firstName
  const lastName = props.lastName
  const email = props.email
  const number = props.number

  return (
    <div className = "singlePilot-container" id = "singlePilot-container">
        <div className = "pilotInformation-container"> Distance to nest: {distance}m, Pilot: {firstName} {lastName} </div>
        <div className = "sensitiveInformation-container">  Email: {email} number: {number} </div>
    </div>
  )
}

Drone.propTypes = {
  serialNumber: propTypes.string.isRequired,
  distance: propTypes.number,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  number: propTypes.string.isRequired
}

export default Drone

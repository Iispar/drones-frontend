import React from 'react'
import propTypes from 'prop-types'

/**
 * Display the information of a single pilot.
 * @param props
 * @returns information of a single pilot.
 */
const Pilot = (props) => {
  const distance = Math.round(props.distance / 1000)
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

Pilot.propTypes = {
  distance: propTypes.number,
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  number: propTypes.string.isRequired
}

export default Pilot

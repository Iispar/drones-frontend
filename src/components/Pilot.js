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

  if (firstName === 'default') {
    return (
        <div className = "noPilotSelected-container" id = "noPilotSelected-container">
            Hover over a drone to get it`s information
            <div className = "noPilotSelected-container" id = "noPilotSelected-container">
            or hover over a pilot to see it on the map
          </div>
        </div>
    )
  }
  return (
    <div className = "selectedDrone-container" id = "selectedDrone-container">
        <div className = "selectedInformation-container"> Distance to nest: {distance}m, Pilot: {firstName} {lastName} </div>
        <div className = "selectedInformation-container">  Email: {email}, number: {number} </div>
    </div>
  )
}

Pilot.propTypes = {
  distance: propTypes.number,
  firstName: propTypes.string,
  lastName: propTypes.string,
  email: propTypes.string,
  number: propTypes.string
}

export default Pilot

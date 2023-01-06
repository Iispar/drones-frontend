import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Pilot from '../Pilot'

describe('Pilot component tests', () => {
  const drone = <Pilot
          distance = {20000}
          serialNumber = '12345'
          firstName = 'Matti'
          lastName = 'Meikäläinen'
          email = 'test@example.com'
          number = '0000'
          id = 'test'
          />

  test('renders Pilot', () => {
    const component = render(drone)
    expect(component.container).toHaveTextContent(
      'Distance to nest: 20m, Pilot: Matti Meikäläinen Email: test@example.com, number: 0000'
    )
  })
})

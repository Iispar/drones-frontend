import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Map from '../Map.js'

test('renders map and drones on it', async () => {
  const list = {
    drones: [{
      serialNumber: '1234',
      positionX: 268060.0840538079,
      positionY: 209206.92801725894,
      firstName: 'Matti',
      lastName: 'Meikäläinen',
      email: 'example@test.com',
      number: '0000',
      distance: 44612.12119838845
    },
    {
      serialNumber: '9999',
      positionX: 280396.81940059166,
      positionY: 330115.8985732747,
      firstName: 'Bob',
      lastName: 'Peikkonen',
      email: 'test2@example.com',
      number: '1234',
      distance: 85688.52801790582
    }]
  }
  render(<Map drones = { list.drones } ></Map>)
  const element = screen.getAllByRole('drone')
  expect(element).toBeDefined()
})

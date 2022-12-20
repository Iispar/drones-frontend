import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Main from './Main'
import distanceFromMiddle from './Helpers'

test('renders content', () => {
  render(<Main />)
  const element = screen.getByText('Waiting for data')
  expect(element).toBeDefined()
})

test('distance works', () => {
  const x = 250000
  const yWorks = 349000
  const yBroken = 352000
  const distanceFine = distanceFromMiddle(x, yWorks)
  const distanceWrong = distanceFromMiddle(x, yBroken)
  expect(distanceFine).toBe(99000)
  expect(distanceWrong).toBe(102000)
})

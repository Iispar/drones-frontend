import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Main from './Main'

test('renders content', () => {
  render(<Main />)
  const element = screen.getByText('Waiting for data')
  expect(element).toBeDefined()
})

import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Main from '../Main.js'

test('renders content', () => {
  render(<Main />)
  const element = screen.getByText('Pilots that have violated the border')
  expect(element).toBeDefined()
})

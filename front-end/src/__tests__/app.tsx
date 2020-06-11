import React from 'react'
import {render} from '@testing-library/react'
import App from '../app'

test('renders', () => {
  const {container} = render(<App />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      App
    </h1>
  `)
})

test('header text content', () => {
  const {getByText} = render(<App />)
  const header = getByText('App')
  expect(header).toHaveTextContent(/^App$/)
})

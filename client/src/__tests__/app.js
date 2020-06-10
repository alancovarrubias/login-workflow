import React from 'react'
import {render} from '@testing-library/react'
import App from '../app'

test('renders', () => {
  const {container} = render(<App />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: white;
      background: #1c191c;
    }

    <div>
      <h1>
        App
      </h1>
      <div
        class="emotion-0 emotion-1"
      >
        <form>
          <label>
            Login
          </label>
        </form>
      </div>
      <div
        style="margin-top: 30px;"
      >
        <fieldset>
          <legend>
            Theme
          </legend>
          <label>
            <input
              name="theme"
              type="radio"
              value="light"
            />
             
            light
          </label>
          <label>
            <input
              checked=""
              name="theme"
              type="radio"
              value="dark"
            />
             
            dark
          </label>
        </fieldset>
      </div>
    </div>
  `)
})

test('header text content', () => {
  const {getByText} = render(<App />)
  const header = getByText('App')
  expect(header).toHaveTextContent(/^App$/)
})

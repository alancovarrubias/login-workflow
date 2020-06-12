import React from 'react'
import {render} from '../../test-utils/react'
import App from '../app'

test('renders', () => {
  const {container} = render(<App />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 13px;
      color: white;
      background: #1c191c;
    }

    <div>
      <h1>
        App
      </h1>
      <form>
        <label>
          Login
        </label>
      </form>
      <div
        class="emotion-0"
        data-testid="display-container"
        style="margin-top: 30px;"
      >
        <fieldset>
          <legend>
            Theme
          </legend>
          <label>
             dark
            <input
              checked=""
              data-testid="dark"
              id="dark"
              type="radio"
              value="dark"
            />
          </label>
          <label>
             light
            <input
              data-testid="light"
              id="light"
              type="radio"
              value="light"
            />
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

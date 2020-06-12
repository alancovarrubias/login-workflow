import React from 'react'
import {render} from '@testing-library/react'
import App from '../app'
import {Theme} from '../themes'

describe('App', () => {
  it('renders dark theme by default', () => {
    const {getByTestId} = render(<App />)
    const displayContainer = getByTestId('display-container')
    const darkInput = getByTestId(
      new RegExp(`theme-${Theme.DARK}`),
    ) as HTMLInputElement
    expect(darkInput.checked).toBe(true)
    expect(getComputedStyle(displayContainer).color).toBe('white')
  })

  it('switches themes when light input is clicked', () => {
    const {getByTestId} = render(<App />)
    const displayContainer = getByTestId('display-container')
    const lightInput = getByTestId(
      new RegExp(`theme-${Theme.LIGHT}`),
    ) as HTMLInputElement
    lightInput.click()
    expect(lightInput.checked).toBe(true)
    expect(getComputedStyle(displayContainer).backgroundColor).toBe('white')
  })
})

test('render', () => {
  const {container} = render(<App />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      color: white;
      background: #1c191c;
    }

    .emotion-0 input {
      cursor: pointer;
    }

    <div>
      <h1>
        Sports App
      </h1>
      <form>
        <label
          for="uname"
        >
          <b>
            Username
          </b>
        </label>
        <input
          name="uname"
          placeholder="Enter Username"
          type="text"
        />
        <label
          for="psw"
        >
          <b>
            Password
          </b>
        </label>
        <input
          name="psw"
          placeholder="Enter Password"
          type="password"
        />
        <button
          type="submit"
        >
          Login
        </button>
      </form>
      <div
        class="emotion-0"
        data-testid="display-container"
        style="margin-top: 30px;"
      >
        <fieldset>
          <legend>
            Themes
          </legend>
          <label>
             dark
            <input
              checked=""
              data-testid="theme-dark"
              type="radio"
              value="dark"
            />
          </label>
          <label>
             light
            <input
              data-testid="theme-light"
              type="radio"
              value="light"
            />
          </label>
        </fieldset>
      </div>
    </div>
  `)
})

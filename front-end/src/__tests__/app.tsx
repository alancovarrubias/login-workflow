import React from 'react'
import {render} from '@testing-library/react'
import user from '@testing-library/user-event'
import App from '../app'
import {Theme} from '../themes'

const TEST_COLOR = 'white'
const TEST_IDS = {
  displayContainer: 'display-container',
}
function renderApp() {
  return render(<App />)
}
describe('App', () => {
  it('renders dark theme by default', () => {
    const {getByTestId} = renderApp()
    const displayContainer = getByTestId(TEST_IDS.displayContainer)
    const darkInput = getByTestId(
      new RegExp(`theme-${Theme.DARK}`),
    ) as HTMLInputElement
    expect(darkInput).toBeChecked()
    expect(getComputedStyle(displayContainer).color).toBe(TEST_COLOR)
  })

  it('switches themes when light input is clicked', () => {
    const {getByTestId} = renderApp()
    const displayContainer = getByTestId(TEST_IDS.displayContainer)
    const lightInput = getByTestId(
      new RegExp(`theme-${Theme.LIGHT}`),
    ) as HTMLInputElement
    user.click(lightInput)
    expect(lightInput).toBeChecked()
    expect(getComputedStyle(displayContainer).backgroundColor).toBe(TEST_COLOR)
  })
})

test('render', () => {
  const {container} = renderApp()
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
          for="username"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          placeholder="Enter Username"
          type="username"
          value=""
        />
        <label
          for="password"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          placeholder="Enter Password"
          type="password"
          value=""
        />
        <button
          role="button"
          type="submit"
        >
          Submit
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
              id="theme-dark"
              type="radio"
              value="dark"
            />
          </label>
          <label>
             light
            <input
              data-testid="theme-light"
              id="theme-light"
              type="radio"
              value="light"
            />
          </label>
        </fieldset>
      </div>
    </div>
  `)
})

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

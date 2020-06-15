import MagicUser from '@testing-library/user-event'
import {renderApp, TestIdMap, TestColor} from './_utils'
import {Theme} from '../themes'

describe('App', () => {
  it('renders dark theme by default', () => {
    const {getByTestId, themeInputs} = renderApp()
    const displayContainer = getByTestId(TestIdMap.displayContainer)
    const darkInput = themeInputs(Theme.Dark)
    expect(darkInput).toBeChecked()
    expect(getComputedStyle(displayContainer).color).toBe(TestColor)
  })

  it('switches themes when light input is clicked', () => {
    const {getByTestId, themeInputs} = renderApp()
    const displayContainer = getByTestId(TestIdMap.displayContainer)
    const lightInput = themeInputs(Theme.Light)
    MagicUser.click(lightInput)
    expect(lightInput).toBeChecked()
    expect(getComputedStyle(displayContainer).backgroundColor).toBe(TestColor)
  })
})

import MagicUser from '@testing-library/user-event'
import {renderApp, TestIdMap, TestColor} from './_utils'
import {Theme} from '../themes'

describe('App', () => {
  it('renders dark theme by default', () => {
    const {getByTestId} = renderApp()
    const displayContainer = getByTestId(TestIdMap.displayContainer)
    const darkInput = getByTestId(
      new RegExp(`theme-${Theme.Dark}`),
    ) as HTMLInputElement
    expect(darkInput).toBeChecked()
    expect(getComputedStyle(displayContainer).color).toBe(TestColor)
  })

  it('switches themes when light input is clicked', () => {
    const {getByTestId} = renderApp()
    const displayContainer = getByTestId(TestIdMap.displayContainer)
    const lightInput = getByTestId(
      new RegExp(`theme-${Theme.Light}`),
    ) as HTMLInputElement
    MagicUser.click(lightInput)
    expect(lightInput).toBeChecked()
    expect(getComputedStyle(displayContainer).backgroundColor).toBe(TestColor)
  })
})

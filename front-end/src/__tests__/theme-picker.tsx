import React from 'react'
import {render} from '../../test-utils/react'
import ThemePicker from '../theme-picker'
import {Themes} from '../themes'

function renderThemePicker({theme}) {
  const mockOnThemeChange = jest.fn()
  const utils = render(
    <ThemePicker onThemeChange={mockOnThemeChange} theme={theme} />,
    {
      theme,
    },
  )
  return {
    theme,
    mockOnThemeChange,
    ...utils,
  }
}
test('dark props render white text color and dark radio button checked', () => {
  const {mockOnThemeChange, getByTestId, theme} = renderThemePicker({
    theme: Themes.DARK,
  })
  const displayContainer = getByTestId('display-container')
  expect(getComputedStyle(displayContainer).color).toBe('white')
  const darkInput = getByTestId(theme) as HTMLInputElement
  expect(darkInput.checked).toBe(true)
  darkInput.click()
  expect(mockOnThemeChange).not.toHaveBeenCalledTimes(1)

  const otherTheme = Themes.LIGHT
  const otherInput = getByTestId(otherTheme) as HTMLInputElement
  otherInput.click()
  expect(mockOnThemeChange).toHaveBeenCalledTimes(1)
})

test('light props render white background color and light radio button checked', () => {
  const {mockOnThemeChange, getByTestId, theme} = renderThemePicker({
    theme: Themes.LIGHT,
  })
  const displayContainer = getByTestId('display-container')
  expect(getComputedStyle(displayContainer).backgroundColor).toBe('white')
  const lightInput = getByTestId(theme) as HTMLInputElement
  expect(lightInput.checked).toBe(true)
  lightInput.click()
  expect(mockOnThemeChange).not.toHaveBeenCalledTimes(1)

  const otherTheme = Themes.DARK
  const otherInput = getByTestId(otherTheme) as HTMLInputElement
  otherInput.click()
  expect(mockOnThemeChange).toHaveBeenCalledTimes(1)
})

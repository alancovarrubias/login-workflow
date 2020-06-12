import React from 'react'
import {render} from '../../test-utils/react'
import ThemePicker from '../theme-picker'
import {DefaultTheme, NonDefaultTheme, ThemeList} from '../themes'

function renderThemePicker() {
  const mockOnThemeChange = jest.fn()
  const utils = render(<ThemePicker onThemeChange={mockOnThemeChange} />)
  return {
    mockOnThemeChange,
    ...utils,
  }
}

describe('ThemePicker', () => {
  it('renders inputs equal to the number of themes', () => {
    const {queryAllByTestId} = renderThemePicker()
    const themeInputs = queryAllByTestId(/theme/)
    expect(themeInputs.length).toEqual(ThemeList.length)
  })
  it('calls onThemeChange when non default input is clicked', () => {
    const {mockOnThemeChange, queryByTestId} = renderThemePicker()
    const nonDefaultInput = queryByTestId(`theme-${NonDefaultTheme}`)
    nonDefaultInput.click()
    expect(mockOnThemeChange).toHaveBeenCalledTimes(1)
  })
  it('does not call onThemeChange when default input is clicked', () => {
    const {mockOnThemeChange, queryByTestId} = renderThemePicker()
    const defaultInput = queryByTestId(`theme-${DefaultTheme}`)
    defaultInput.click()
    expect(mockOnThemeChange).not.toHaveBeenCalled()
  })
})

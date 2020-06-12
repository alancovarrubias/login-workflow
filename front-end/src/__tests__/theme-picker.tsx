import React from 'react'
import {render} from '../../test-utils/react'
import user from '@testing-library/user-event'
import ThemePicker from '../theme-picker'
import {defaultTheme, nonDefaultTheme, themeList, Theme} from '../themes'

const ALL_THEMES = 'ALL'
function renderThemePicker() {
  const mockOnThemeChange = jest.fn()
  const utils = render(<ThemePicker onThemeChange={mockOnThemeChange} />)
  const getThemeInputs = (theme: Theme | string): HTMLElement | HTMLElement[] =>
    theme === ALL_THEMES
      ? (utils.queryAllByTestId(/theme/) as HTMLElement[])
      : (utils.getByTestId(new RegExp(`theme-${theme}`)) as HTMLElement)
  return {
    mockOnThemeChange,
    getThemeInputs,
  }
}

describe('ThemePicker', () => {
  it('renders inputs equal to the number of themes', () => {
    const {getThemeInputs} = renderThemePicker()
    const themeInputs = getThemeInputs(ALL_THEMES) as HTMLElement[]
    expect(themeInputs.length).toBe(themeList.length)
  })
  it('calls onThemeChange when non default input is clicked', () => {
    const {mockOnThemeChange, getThemeInputs} = renderThemePicker()
    const nonDefaultInput = getThemeInputs(nonDefaultTheme) as HTMLElement
    user.click(nonDefaultInput)
    expect(mockOnThemeChange).toHaveBeenCalledTimes(1)
  })
  it('does not call onThemeChange when default input is clicked', () => {
    const {mockOnThemeChange, getThemeInputs} = renderThemePicker()
    const defaultInput = getThemeInputs(defaultTheme) as HTMLElement
    user.click(defaultInput)
    expect(mockOnThemeChange).not.toHaveBeenCalled()
  })
})

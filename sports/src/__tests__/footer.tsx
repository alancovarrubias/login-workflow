import React from 'react'
import {render} from '../../test-utils/react'
import Footer from '../footer'
import {availableThemes, Theme} from '../themes'

const ALL_THEMES = 'ALL'
function renderFooter() {
  const utils = render(<Footer />)
  const getThemeInputs = (theme: Theme | string): HTMLElement | HTMLElement[] =>
    theme === ALL_THEMES
      ? (utils.queryAllByTestId(/theme/) as HTMLElement[])
      : (utils.getByTestId(new RegExp(`theme-${theme}`)) as HTMLElement)
  return {
    getThemeInputs,
  }
}

describe('Footer', () => {
  it('renders inputs equal to the number of themes', () => {
    const {getThemeInputs} = renderFooter()
    const themeInputs = getThemeInputs(ALL_THEMES) as HTMLElement[]
    expect(themeInputs.length).toBe(availableThemes.length)
  })
})

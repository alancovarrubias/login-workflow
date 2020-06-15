import {Themes, Theme} from '../themes'
import {renderFooter} from './_utils'

const ALL_THEMES = 'ALL'
function render() {
  const utils = renderFooter()
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
    const {getThemeInputs} = render()
    const themeInputs = getThemeInputs(ALL_THEMES) as HTMLElement[]
    expect(themeInputs.length).toBe(Themes.length)
  })
})

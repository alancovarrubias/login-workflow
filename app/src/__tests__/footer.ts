import {renderFooter} from './_utils'
import {Themes} from '../themes'

describe('Footer', () => {
  it('renders inputs equal to the number of themes', () => {
    const {getThemeInputs} = renderFooter()
    const themeInputs = getThemeInputs('ALL_THEMES') as HTMLElement[]
    expect(themeInputs.length).toBe(Themes.length)
  })
})

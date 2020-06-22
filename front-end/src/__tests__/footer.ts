import {renderFooter} from './_utils'
import {Themes} from '../themes'

describe('Footer', () => {
  it('renders inputs equal to the number of themes', () => {
    const {themeInputs} = renderFooter()
    const inputs = themeInputs('ALL')
    expect(inputs.length).toBe(Themes.length)
  })
})

import React from 'react'
import {render} from '../../test-utils/react'
import App from '../app'
import {Themes} from '../themes'

describe('App', () => {
  it('renders dark theme by default', () => {
    const {getByTestId} = render(<App />)
    const displayContainer = getByTestId('display-container')
    const darkInput = getByTestId(
      new RegExp(`theme-${Themes.DARK}`),
    ) as HTMLInputElement
    expect(darkInput.checked).toBe(true)
    expect(getComputedStyle(displayContainer).color).toBe('white')
  })

  it('switches themes when light input is clicked', () => {
    const {getByTestId} = render(<App />)
    const displayContainer = getByTestId('display-container')
    const lightInput = getByTestId(
      new RegExp(`theme-${Themes.LIGHT}`),
    ) as HTMLInputElement
    lightInput.click()
    expect(lightInput.checked).toBe(true)
    expect(getComputedStyle(displayContainer).backgroundColor).toBe('white')
  })
})

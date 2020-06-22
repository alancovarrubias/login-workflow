/* istanbul ignore file */
import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {render as routerRender, RouterRenderResult} from '@test-utils/router'
import {render as themeRender, ThemeRenderResult} from '@test-utils/theme'

import App from '../app'
import Main from '../main'
import Footer from '../footer'
import {Theme} from '../themes'
import {TargetElement} from '@testing-library/user-event'

export const TestColor = 'white'
export const TestIdMap = {
  displayContainer: 'display-container',
}
type ThemeInputsReturnValue = TargetElement & {
  length?: number
}
interface ThemeInputsMethod {
  (theme: Theme | 'ALL'): ThemeInputsReturnValue
}
function themeInputsMethod(utils, theme): ThemeInputsReturnValue {
  if (theme === 'ALL') {
    const inputs = utils.queryAllByTestId(/theme/) as TargetElement
    return inputs
  } else {
    const input = utils.getByTestId(new RegExp(`theme-${theme}`))
    input.length = 1
    return input
  }
}
const createThemeInputsMethod = (utils): ThemeInputsMethod => theme =>
  themeInputsMethod(utils, theme)

type ThemeInputsMethodContainer = {themeInputs: ThemeInputsMethod}
type AppRenderResult = RouterRenderResult & ThemeInputsMethodContainer
export const renderApp = (): AppRenderResult => {
  const utils = rtlRender(<App />)
  const themeInputs = createThemeInputsMethod(utils)
  return {
    ...utils,
    themeInputs,
  }
}
type MainRenderResult = RouterRenderResult
export const renderMain = (): MainRenderResult => {
  return routerRender(<Main />)
}
type FooterRenderResult = ThemeRenderResult & ThemeInputsMethodContainer
export const renderFooter = (): FooterRenderResult => {
  const utils = themeRender(<Footer />)
  const themeInputs = createThemeInputsMethod(utils)
  return {
    ...utils,
    themeInputs,
  }
}

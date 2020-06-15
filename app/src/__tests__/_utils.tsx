import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {render as routerRender, RouterRenderResult} from '@test-utils/router'
import {render as themeRender, ThemeRenderResult} from '@test-utils/theme'

import App from '../app'
import Main from '../main'
import Footer from '../footer'
import {Theme} from '../themes'

const renderApp = (): RouterRenderResult => {
  return rtlRender(<App />)
}
const renderMain = (): RouterRenderResult => {
  return routerRender(<Main />)
}

type FooterResult = ThemeRenderResult & {
  getThemeInputs(theme: Theme | 'ALL_THEMES'): HTMLElement | HTMLElement[]
}
const renderFooter = (): FooterResult => {
  const utils = themeRender(<Footer />)
  const getThemeInputs = theme =>
    theme === 'ALL_THEMES'
      ? (utils.queryAllByTestId(/theme/) as HTMLElement[])
      : (utils.getByTestId(new RegExp(`theme-${theme}`)) as HTMLElement)
  return {
    ...utils,
    getThemeInputs,
  }
}

const TestColor = 'white'
const TestIdMap = {
  displayContainer: 'display-container',
}

export {renderApp, renderMain, renderFooter, TestColor, TestIdMap}

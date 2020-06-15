import React from 'react'
import App from '../app'
import Main from '../main'
import Footer from '../footer'
import {render as routerRender, RouterRenderResult} from '@test-utils/router'
import {render as rtlRender} from '@testing-library/react'
import {render as themeRender} from '@test-utils/theme'

const renderApp = (): RouterRenderResult => {
  return rtlRender(<App />)
}
const renderMain = (): RouterRenderResult => {
  return routerRender(<Main />)
}
const renderFooter = (): RouterRenderResult => {
  return themeRender(<Footer />)
}

const TestColor = 'white'
const TestIdMap = {
  displayContainer: 'display-container',
}

export {renderApp, renderMain, renderFooter, TestColor, TestIdMap}

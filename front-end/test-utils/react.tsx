import React from 'react'
import PropTypes from 'prop-types'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {Theme, ThemeProvider, defaultTheme} from '../src/themes'

export type RenderOptions = {
  theme?: Theme
  [name: string]: {}
}
const render = (
  ui: React.ReactElement,
  {theme, ...options}: RenderOptions = {defaultTheme},
): RenderResult => {
  function Wrapper({children}) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
  }
  Wrapper.propTypes = {
    children: PropTypes.node,
  }
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export * from '@testing-library/user-event'
export {render}

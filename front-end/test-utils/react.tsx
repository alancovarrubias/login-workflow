import React from 'react'
import PropTypes from 'prop-types'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {ThemeProvider} from 'emotion-theming'
import {Theme, themeOptionsMap} from '../src/themes'

export interface RenderOptions {
  theme?: string
  [name: string]: {}
}

function render(
  ui: React.ReactElement,
  {theme, ...options}: RenderOptions = {theme: Theme.DARK},
): RenderResult {
  function Wrapper({children}) {
    return (
      <ThemeProvider theme={themeOptionsMap[theme]}>{children}</ThemeProvider>
    )
  }
  Wrapper.propTypes = {
    children: PropTypes.node,
  }
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
export {render}

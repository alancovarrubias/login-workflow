import React from 'react'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {Theme, ThemeProvider, defaultTheme} from '../src/themes'

const defaultRenderOptions = {
  theme: defaultTheme,
}
export type RenderOptions = {
  theme?: Theme
}
const render = (
  ui: React.ReactElement,
  {
    theme = defaultTheme,
    ...renderOptions
  }: RenderOptions = defaultRenderOptions,
): RenderResult & RenderOptions => {
  const Wrapper = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
  return {theme, ...rtlRender(ui, {wrapper: Wrapper, ...renderOptions})}
}

export {render}
export * from '@testing-library/react'

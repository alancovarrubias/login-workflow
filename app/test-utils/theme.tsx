import React from 'react'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {Theme, ThemeProvider, DefaultTheme} from '../src/themes'

const defaultRenderOptions = {
  theme: DefaultTheme,
}
export type RenderOptions = {
  theme?: Theme
}
const render = (
  ui: React.ReactElement,
  {
    theme = DefaultTheme,
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

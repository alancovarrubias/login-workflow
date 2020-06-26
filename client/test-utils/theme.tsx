import React from 'react'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {Theme, ThemeProvider, DefaultTheme} from '../src/themes'

const defaultRenderOptions = {
  theme: DefaultTheme,
}
export type ThemeRenderOptions = {
  theme?: Theme
}
export type ThemeRenderResult = ThemeRenderOptions & RenderResult
const render = (
  ui: React.ReactElement,
  {
    theme = DefaultTheme,
    ...renderOptions
  }: ThemeRenderOptions = defaultRenderOptions,
): ThemeRenderResult => {
  const Wrapper = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
  return {theme, ...rtlRender(ui, {wrapper: Wrapper, ...renderOptions})}
}

export {render}
export * from '@testing-library/react'

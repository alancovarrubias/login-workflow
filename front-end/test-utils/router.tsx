import React from 'react'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
} from '@reach/router'

type History = {
  location: {pathname: string}
  navigate: Function
}
export interface RouterRenderOptions {
  route?: string
  history?: History
}
export type RouterRenderResult = RouterRenderOptions & RenderResult
const render = (
  ui: React.ReactElement,
  {
    route = '/',
    history = createHistory(createMemorySource(route)),
    ...renderOptions
  }: RouterRenderOptions = {},
): RouterRenderResult => {
  const Wrapper = ({children}) => (
    <LocationProvider history={history}>{children}</LocationProvider>
  )

  return {
    ...rtlRender(ui, {wrapper: Wrapper, ...renderOptions}),
    history,
  }
}

export {render}
export * from '@testing-library/react'

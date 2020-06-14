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
export type RenderOptions = {
  route?: string
  history?: History
}
const render = (
  ui: React.ReactElement,
  {
    route = '/',
    history = createHistory(createMemorySource(route)),
    ...renderOptions
  }: RenderOptions = {},
): RenderResult & RenderOptions => {
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

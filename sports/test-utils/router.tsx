import React from 'react'
import {createMemoryHistory, MemoryHistory} from 'history'
import {render as rtlRender, RenderResult} from '@testing-library/react'
import {Router} from '@reach/router'

const defaultRoute = '/'
const defaultRenderOptions = {
  route: defaultRoute,
  history: createMemoryHistory({initialEntries: [defaultRoute]}),
}
export type RenderOptions = {
  route?: string
  history?: MemoryHistory<object>
}
const render = (
  ui: React.ReactElement,
  {
    route = defaultRoute,
    history = createMemoryHistory({initialEntries: [route]}),
    ...renderOptions
  }: RenderOptions = defaultRenderOptions,
): RenderResult & RenderOptions => {
  // const Wrapper = ({children}) => <Router history={history}>{children}</Router>
  return {
    history,
    route,
    ...rtlRender(ui, {...renderOptions}),
  }
}

export {render}
export * from '@testing-library/react'

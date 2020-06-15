import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import Auth from '..'

type RenderAuthProps = {
  path?: string
  username?: string
  password?: string
  onSubmit?: Function
}
const renderAuth = (props: RenderAuthProps = {}): RenderResult =>
  render(<Auth {...props} />)

export {renderAuth}

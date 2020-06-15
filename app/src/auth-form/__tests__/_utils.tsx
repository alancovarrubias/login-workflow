/* istanbul ignore file */
import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import AuthForm from '../index'

type RenderAuthFormProps = {
  path?: string
  username?: string
  password?: string
  onSubmit?: Function
}
const renderAuthForm = (props: RenderAuthFormProps = {}): RenderResult =>
  render(<AuthForm {...props} />)

export {renderAuthForm}

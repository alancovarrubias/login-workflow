import React from 'react'
import LoginForm from '../login-form'
import {render} from '../../test-utils/react'

test('renders', () => {
  const {container} = render(<LoginForm />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <form>
      <label>
        Login
      </label>
    </form>
  `)
})

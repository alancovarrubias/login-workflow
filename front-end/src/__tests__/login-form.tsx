import React from 'react'
import LoginForm from '../login-form'
import {render} from '../../test-utils/react'

test('renders', () => {
  const {container} = render(<LoginForm />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <form>
      <label
        for="uname"
      >
        <b>
          Username
        </b>
      </label>
      <input
        name="uname"
        placeholder="Enter Username"
        type="text"
      />
      <label
        for="psw"
      >
        <b>
          Password
        </b>
      </label>
      <input
        name="psw"
        placeholder="Enter Password"
        type="password"
      />
      <button
        type="submit"
      >
        Login
      </button>
    </form>
  `)
})

import React from 'react'
import {render} from '@test/login-test-utils'
import LoginForm from '../login-form'

test('renders', () => {
  const {container} = render(<LoginForm />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: white;
      background: #1c191c;
    }

    <div
      class="emotion-0 emotion-1"
    >
      <form>
        <label>
          Login
        </label>
      </form>
    </div>
  `)
})

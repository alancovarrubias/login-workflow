import React from 'react'
import MagicUser from '@testing-library/user-event'
import {render, waitFor, act} from '@testing-library/react'
import Auth from '../index'
import {navigate} from '@reach/router'

const defaultPath = '/login'
jest.mock('../../api/index', () => ({
  AuthApi: {
    login: jest.fn(() => Promise.reject(null)),
    register: jest.fn(() => Promise.reject(null)),
  },
}))
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'

type RenderAuthProps = {
  path?: string
  username?: string
  password?: string
  onSubmit?: Function
}
const renderAuth = (
  {path = defaultPath, ...restOfProps}: RenderAuthProps = {path: defaultPath},
) => render(<Auth path={path} {...restOfProps} />)

describe('Auth', () => {
  describe('successful user login', () => {
    describe('clicking the button', () => {
      it('navigates to the error page', async () => {
        const {getByRole} = renderAuth({
          username,
          password,
        })
        const submitButton = getByRole('button')
        await act(async () => {
          MagicUser.click(submitButton)
          await waitFor(() => {
            expect(navigate).toHaveBeenCalledWith('/error')
          })
        })
      })
    })
  })
})

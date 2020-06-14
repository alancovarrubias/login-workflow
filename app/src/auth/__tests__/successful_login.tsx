import React from 'react'
import MagicUser from '@testing-library/user-event'
import {axe} from 'jest-axe'
import {render, waitFor, act} from '@testing-library/react'
import Auth from '../index'
import {navigate} from '@reach/router'

const defaultPath = '/login'
jest.mock('../../api/index', () => ({
  AuthApi: {
    login: jest.fn(() => Promise.resolve(null)),
    register: jest.fn(() => Promise.resolve(null)),
  },
}))
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
const user = {username, password}

type RenderAuthProps = {
  path?: string
  username?: string
  password?: string
  onSubmit?: Function
}
const renderAuth = (
  {path = defaultPath, ...restOfProps}: RenderAuthProps = {path: defaultPath},
) => render(<Auth path={path} {...restOfProps} />)

describe('Successful user login', () => {
  describe('clicking the button', () => {
    it('navigates to the home page', async () => {
      const {getByRole} = renderAuth({
        username,
        password,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        MagicUser.click(submitButton)
        await waitFor(() => {
          expect(navigate).toHaveBeenCalledWith('/home')
        })
      })
    })
  })
})

import React from 'react'
import {navigate} from '@reach/router'
import MagicUser from '@testing-library/user-event'
import {render, waitFor, act} from '@testing-library/react'
import {ValidUser} from '@test-utils/fixtures/users'
import Auth from '../index'

jest.mock('../../api/index', () => ({
  AuthApi: {
    login: jest.fn(() => Promise.resolve(null)),
    register: jest.fn(() => Promise.resolve(null)),
  },
}))
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

const defaultPath = '/login'
const {username, password} = ValidUser

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
  describe('submitting the form', () => {
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

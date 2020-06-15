import React from 'react'
import {navigate} from '@reach/router'
import MagicUser from '@testing-library/user-event'
import {render, waitFor, act} from '@testing-library/react'
import {ValidUser} from '@test-utils/fixtures/users'
import Auth from '../index'
import {Routes} from '../../../utils/routes'
import {DefaultPath} from '..'

jest.mock('../../api/index', () => ({
  AuthApi: {
    login: jest.fn(() => Promise.reject(null)),
    register: jest.fn(() => Promise.reject(null)),
  },
}))
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

const {username, password} = ValidUser

type RenderAuthProps = {
  path?: string
  username?: string
  password?: string
  onSubmit?: Function
}
const renderAuth = (
  {path = DefaultPath, ...restOfProps}: RenderAuthProps = {path: DefaultPath},
) => render(<Auth path={path} {...restOfProps} />)

describe('Unsuccessful user login', () => {
  describe('submitting the form', () => {
    it('navigates to the error page', async () => {
      const {getByRole} = renderAuth({
        username,
        password,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        MagicUser.click(submitButton)
        await waitFor(() => {
          expect(navigate).toHaveBeenCalledWith(Routes.Error)
        })
      })
    })
  })
})

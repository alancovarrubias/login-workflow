import {navigate} from '@reach/router'
import {AuthFormApi} from '../../api'
import {waitFor, act} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {ValidUser} from '@test-utils/fixtures/user'
import {Routes} from '@utils/routes'
import {renderAuthForm} from './_utils'

jest.mock('../../api', () => ({
  AuthFormApi: {
    login: jest.fn(() => Promise.reject(null)),
    register: jest.fn(() => Promise.reject(null)),
  },
}))

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

beforeEach(() => {
  navigate.mockClear()
})

const {username, password} = ValidUser
describe('Unsuccessful user registration', () => {
  describe('submitting the form', () => {
    it('calls the register method and navigates to the error page', async () => {
      const {getByRole} = renderAuthForm({
        username,
        password,
        path: Routes.Register,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        await MagicUser.click(submitButton)
        await waitFor(() => {
          expect(AuthFormApi.register).toHaveBeenCalledTimes(1)
          expect(AuthFormApi.register).toHaveBeenCalledWith({
            username,
            password,
          })
          expect(navigate).toHaveBeenCalledWith(Routes.Error)
          expect(navigate).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})

describe('Unsuccessful user login', () => {
  describe('submitting the form', () => {
    it('calls the login method and navigates to the error page', async () => {
      const {getByRole} = renderAuthForm({
        username,
        password,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        await MagicUser.click(submitButton)
        await waitFor(() => {
          expect(AuthFormApi.login).toHaveBeenCalledTimes(1)
          expect(AuthFormApi.login).toHaveBeenCalledWith({username, password})
          expect(navigate).toHaveBeenCalledWith(Routes.Error)
          expect(navigate).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})

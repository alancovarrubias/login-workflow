import {navigate} from '@reach/router'
import {waitFor, act} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {ValidUser} from '@test-utils/fixtures/user'
import {Routes} from '@utils/routes'
import {AuthFormApi} from '../../api'
import {renderAuthForm} from './_utils'

jest.mock('../../api', () => ({
  AuthFormApi: {
    login: jest.fn(() => Promise.resolve({user: {id, username}})),
    register: jest.fn(() => Promise.resolve({user: {id, username}})),
  },
}))

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

beforeEach(() => {
  navigate.mockClear()
})

const {id, username, password} = ValidUser
describe('Successful user registration', () => {
  describe('submitting the form', () => {
    it('calls the registration method and navigates to the home page', async () => {
      const {getByRole} = renderAuthForm({
        username,
        password,
        path: Routes.Register,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        MagicUser.click(submitButton)
        await waitFor(() => {
          expect(AuthFormApi.register).toHaveBeenCalledWith({
            username,
            password,
          })
          expect(AuthFormApi.register).toHaveBeenCalledTimes(1)
          expect(navigate).toHaveBeenCalledWith(Routes.Home)
          expect(navigate).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})

describe('Successful user login', () => {
  describe('submitting the form', () => {
    it('calls the login method and navigates to the home page', async () => {
      const {getByRole} = renderAuthForm({
        username,
        password,
        path: Routes.Login,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        MagicUser.click(submitButton)
        await waitFor(() => {
          expect(AuthFormApi.login).toHaveBeenCalledWith({username, password})
          expect(AuthFormApi.login).toHaveBeenCalledTimes(1)
          expect(navigate).toHaveBeenCalledWith(Routes.Home)
          expect(navigate).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})

import {navigate} from '@reach/router'
import {waitFor, act} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {ValidUser} from '@test-utils/fixtures/users'
import {Routes} from '@utils/routes'
import {renderAuthForm} from './_utils'

const {username, password} = ValidUser
jest.mock('../../api/index', () => ({
  AuthFormApi: {
    login: jest.fn(() => Promise.resolve({user: {username}})),
    register: jest.fn(() => Promise.resolve({user: {username}})),
  },
}))
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

describe('Successful user login', () => {
  describe('submitting the form', () => {
    it('navigates to the home page', async () => {
      const {getByRole} = renderAuthForm({
        username,
        password,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        MagicUser.click(submitButton)
        await waitFor(() => {
          expect(navigate).toHaveBeenCalledWith(Routes.Home)
          expect(JSON.parse(window.localStorage.getItem('user'))).toEqual({
            username,
          })
        })
      })
    })
  })
})

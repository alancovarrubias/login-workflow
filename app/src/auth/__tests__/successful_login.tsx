import {navigate} from '@reach/router'
import {waitFor, act} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {ValidUser} from '@test-utils/fixtures/users'
import {renderAuth} from './_utils'
import {Routes} from '../const'

jest.mock('../../api/index', () => ({
  AuthApi: {
    login: jest.fn(() => Promise.resolve(null)),
    register: jest.fn(() => Promise.resolve(null)),
  },
}))
jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

const {username, password} = ValidUser
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
          expect(navigate).toHaveBeenCalledWith(Routes.Home)
        })
      })
    })
  })
})

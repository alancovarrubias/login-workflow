import {navigate} from '@reach/router'
import {waitFor, act} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {ValidUser} from '@test-utils/fixtures/users'
import {Routes} from '@utils/routes'
import {renderAuthForm} from './_utils'

jest.mock('../../api/index', () => ({
  AuthFormApi: {
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
      const {getByRole} = renderAuthForm({
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

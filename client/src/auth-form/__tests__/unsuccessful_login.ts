import {navigate} from '@reach/router'
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

const {username, password} = ValidUser
describe('Unsuccessful user login', () => {
  describe('submitting the form', () => {
    it('navigates to the error page', async () => {
      const {getByRole} = renderAuthForm({
        username,
        password,
      })
      const submitButton = getByRole('button')
      await act(async () => {
        await MagicUser.click(submitButton)
        await waitFor(() => {
          expect(navigate).toHaveBeenCalledWith(Routes.Error)
          expect(navigate).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})

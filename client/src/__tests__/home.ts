import {AuthFormApi} from '../api'
import MagicUser from '@testing-library/user-event'
import {Routes} from '@utils/routes'
import {ValidUser} from '@test-utils/fixtures/user'
import {renderHome} from './_utils'

jest.mock('../api', () => ({
  AuthFormApi: {
    logout: jest.fn(),
  },
}))

describe('Home', () => {
  describe('clicking the logout button', () => {
    it('navigates to the login page and clears user from local storage', async () => {
      window.localStorage.setItem('user', JSON.stringify(ValidUser))
      const {getByText, history} = renderHome()
      const logout = getByText(/logout/i)
      MagicUser.click(logout)
      expect(AuthFormApi.logout).toHaveBeenCalledWith(ValidUser)
      expect(AuthFormApi.logout).toHaveBeenCalledTimes(1)
      expect(history.location.pathname).toEqual(Routes.Login)
    })
  })
})

import {act, waitFor} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {Routes} from '@utils/routes'
import {renderHome} from './_utils'

describe('Home', () => {
  describe('clicking the logout button', () => {
    it('navigates to the login page and clears user from local storage', async () => {
      const {getByText, history} = renderHome()
      const logout = getByText(/logout/i)
      await act(async () => {
        MagicUser.click(logout)
        await waitFor(() => {
          expect(history.location.pathname).toBe(Routes.Login)
          expect(window.localStorage.getItem('user')).toBeNull()
        })
      })
    })
  })
})

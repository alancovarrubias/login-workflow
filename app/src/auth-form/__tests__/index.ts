import {axe} from 'jest-axe'
import {waitFor, act} from '@testing-library/react'
import MagicUser from '@testing-library/user-event'
import {ValidUser} from '@test-utils/fixtures/users'
import {renderAuthForm} from './_utils'

const {username, password} = ValidUser
describe('AuthForm', () => {
  test('accessibility', async () => {
    const {container} = renderAuthForm()
    await act(async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
  describe('user form', () => {
    it('fills in the username', async () => {
      const {getByPlaceholderText} = renderAuthForm()
      const usernameInput = getByPlaceholderText('Enter Username')
      await act(async () => {
        await MagicUser.type(usernameInput, username)
        expect(await waitFor(() => usernameInput)).toHaveValue(username)
      })
    })
    it('fills in the password', async () => {
      const {getByPlaceholderText} = renderAuthForm()
      const passwordInput = getByPlaceholderText('Enter Password')
      await act(async () => {
        await MagicUser.type(passwordInput, password)
        expect(await waitFor(() => passwordInput)).toHaveValue(password)
      })
    })
    /*
    describe('clicking the button', () => {
      it('submits the form', async () => {
        const {getByRole} = renderAuthForm({
          username,
          password,
        })
        const submitButton = getByRole('button')
        expect(submitButton).toBeEnabled()
        await act(async () => {
          MagicUser.click(submitButton)
          expect(submitForm).toHaveBeenCalled()
        })
      })
    })
    */
  })
})

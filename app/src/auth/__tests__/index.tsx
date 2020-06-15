import {axe} from 'jest-axe'
import MagicUser from '@testing-library/user-event'
import {waitFor, act} from '@testing-library/react'
import {ValidUser} from '@test-utils/fixtures/users'
import {renderAuth} from './_utils'
import {DefaultPath} from '..'

const {username, password} = ValidUser
describe('Auth', () => {
  test('accessibility', async () => {
    const {container} = renderAuth()
    await act(async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
  describe('user form', () => {
    it('fills in the username', async () => {
      const {getByPlaceholderText} = renderAuth()
      const usernameInput = getByPlaceholderText('Enter Username')
      await act(async () => {
        await MagicUser.type(usernameInput, username)
        expect(await waitFor(() => usernameInput)).toHaveValue(username)
      })
    })
    it('fills in the password', async () => {
      const {getByPlaceholderText} = renderAuth()
      const passwordInput = getByPlaceholderText('Enter Password')
      await act(async () => {
        await MagicUser.type(passwordInput, password)
        expect(await waitFor(() => passwordInput)).toHaveValue(password)
      })
    })
    describe('clicking the button', () => {
      it('submits the form', async () => {
        const onSubmit = jest.fn()
        const {getByRole} = renderAuth({
          username,
          password,
          onSubmit,
        })
        const submitButton = getByRole('button')
        expect(submitButton).toBeEnabled()
        await act(async () => {
          MagicUser.click(submitButton)
          await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith(DefaultPath, ValidUser)
            expect(onSubmit).toHaveBeenCalledTimes(1)
          })
        })
      })
    })
  })
})

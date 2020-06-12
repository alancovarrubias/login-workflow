import React from 'react'
import {render, waitFor, act} from '@testing-library/react'
import user from '@testing-library/user-event'
import {axe} from 'jest-axe'
import LoginForm from '../login-form'

function renderLoginForm(props = {}) {
  const utils = render(<LoginForm {...props} />)
  return {
    ...utils,
    ...props,
  }
}

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
describe('LoginForm', () => {
  test('accessibility', async () => {
    const {container} = renderLoginForm()
    await act(async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
  describe('user login', () => {
    it('fills in the username', async () => {
      const {getByPlaceholderText} = renderLoginForm()
      const usernameInput = getByPlaceholderText('Enter Username')
      await act(async () => {
        await user.type(usernameInput, username)
        expect(await waitFor(() => usernameInput)).toHaveValue(username)
      })
    })
    it('fills in the password', async () => {
      const {getByPlaceholderText} = renderLoginForm()
      const passwordInput = getByPlaceholderText('Enter Password')
      await act(async () => {
        await user.type(passwordInput, password)
        expect(await waitFor(() => passwordInput)).toHaveValue(password)
      })
    })
    it('clicks the login button', async () => {
      const onSubmit = jest
        .fn()
        .mockResolvedValue(setTimeout(() => console.log('phew'), 1000))
      const {getByRole, getByPlaceholderText} = renderLoginForm({
        username,
        password,
        onSubmit,
      })
      const usernameInput = getByPlaceholderText('Enter Username')
      const submitButton = getByRole('button')
      expect(usernameInput).toHaveValue(username)
      expect(submitButton).toBeEnabled()
      await act(async () => {
        user.click(submitButton)
        await waitFor(() => {
          expect(onSubmit).toHaveBeenCalledTimes(1)
          expect(onSubmit).toHaveBeenCalledWith({username, password})
        })
      })
    })
  })
})

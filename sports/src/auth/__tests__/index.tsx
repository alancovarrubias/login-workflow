import React from 'react'
import {render, waitFor, act} from '../../../test-utils/router'
import MagicUser from '@testing-library/user-event'
import {axe} from 'jest-axe'
import Auth from '../index'

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
const user = {username, password}

type RenderAuthProps = {
  path: string
  username?: string
  password?: string
  onSubmit?: Function
}
const renderAuth = (props: RenderAuthProps = {path: '/login'}) =>
  render(<Auth {...props} />)

describe('Auth', () => {
  test('accessibility', async () => {
    const {container} = renderAuth()
    await act(async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
  describe('user login', () => {
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
    it('clicks the login button', async () => {
      const path = '/login'
      const onSubmit = jest.fn()
      const {getByRole} = renderAuth({
        path,
        username,
        password,
        onSubmit,
      })
      const submitButton = getByRole('button')
      expect(submitButton).toBeEnabled()
      await act(async () => {
        MagicUser.click(submitButton)
        await waitFor(() => {
          expect(onSubmit).toHaveBeenCalledTimes(1)
          expect(onSubmit).toHaveBeenCalledWith(path, user)
        })
      })
    })
  })
})

/* eslint-disable no-debugger */
import React from 'react'

const LoginForm: React.FC<{}> = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="uname">
        <b>Username</b>
      </label>
      <input type="text" placeholder="Enter Username" name="uname" />
      <label htmlFor="psw">
        <b>Password</b>
      </label>
      <input type="password" placeholder="Enter Password" name="psw" />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm

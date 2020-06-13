import React from 'react'
import {useFormik} from 'formik'
import Api from './api'

export interface LoginFormValues {
  username?: string
  password?: string
}

interface OtherProps {
  onSubmit?: (values: LoginFormValues) => void
}

const validate = values => {
  const errors: LoginFormValues = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  return errors
}

const loginHandler = (values: LoginFormValues): void => {
  const api = new Api()
  api.signUp(values.username, values.password).then(res => console.log(res))
}
const LoginForm = ({
  onSubmit = loginHandler,
  username = '',
  password = '',
}: OtherProps & LoginFormValues): JSX.Element => {
  const {values, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      username: username,
      password: password,
    },
    validate,
    onSubmit: values => {
      onSubmit(values)
    },
  })
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="username"
        placeholder="Enter Username"
        onChange={handleChange}
        value={values.username}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleChange}
        value={values.password}
      />
      <button role="button" type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}
export default LoginForm

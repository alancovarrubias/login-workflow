import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {useFormik} from 'formik'
import Api from './api'

const validate = values => {
  const errors: UserValues = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  return errors
}

const authHandler = (values: UserValues): void => {
  const api = new Api()
  api.signUp(values.username, values.password).then(res => console.log(res))
}

export interface UserValues {
  username?: string
  password?: string
}
interface AuthProps extends UserValues {
  onSubmit?: (values: UserValues) => void
}
const Auth: React.FC<RouteComponentProps<AuthProps>> = ({
  onSubmit = authHandler,
  username = '',
  password = '',
}) => {
  const {values, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      username,
      password,
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
export default Auth

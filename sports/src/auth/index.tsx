import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {useFormik} from 'formik'
import {validateForm} from './validate-form'
import {submitForm} from './submit-form'

export type User = {
  id?: string
  username?: string
  password?: string
}
export type UserBody = {
  user: User
}
interface AuthProps extends User {
  onSubmit: (user: User) => void
}
const Auth: React.FC<RouteComponentProps<AuthProps>> = ({
  path,
  username = '',
  password = '',
  onSubmit = submitForm,
}) => {
  const {values, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      username,
      password,
    },
    validate: validateForm,
    onSubmit: (user: User) => onSubmit(path, user),
  })
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
export default Auth

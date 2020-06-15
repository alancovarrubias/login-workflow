import React from 'react'
import {RouteComponentProps, navigate} from '@reach/router'
import {useFormik} from 'formik'
import {validateForm} from './validate-form'
import {AuthApi} from '../api'
import {Routes} from '../../utils/routes'
import {DefaultPath} from './const'

export const submitForm = (page: string, user: User): void => {
  const getAuthApiMethod = (page: string) => {
    const pageMethodMap = {
      [Routes.Register]: 'register',
      [Routes.Login]: 'login',
    }
    return AuthApi[pageMethodMap[page]]
  }
  const submitMethod = getAuthApiMethod(page)
  const handleSuccess = (): void => navigate(Routes.Home)
  const handleError = (): void => navigate(Routes.Error)
  submitMethod(user).then(handleSuccess, handleError)
}
const getHeader = (page: string) => {
  const headerMap = {
    [Routes.Register]: 'Register',
    [Routes.Login]: 'Login',
  }
  return headerMap[page]
}
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
  path = DefaultPath,
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
      <h2>{getHeader(path)}</h2>
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

export * from './const'

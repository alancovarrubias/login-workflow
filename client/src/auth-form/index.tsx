import React from 'react'
import {RouteComponentProps, navigate} from '@reach/router'
import {Routes} from '@utils/routes'
import User from '@utils/models/user'
import {useFormik} from 'formik'
import {AuthFormApi} from '../api'
import {DefaultPath} from './const'

const validateForm = (user: User): Partial<User> => {
  const errors: Partial<User> = {}
  if (!user.username) {
    errors.username = 'Required'
  }
  if (!user.password) {
    errors.password = 'Required'
  }
  return errors
}

const submitForm = (page: Routes, user: User): Promise<string> => {
  const getAuthFormApiMethod = (page: Routes) => {
    const pageMethodMap = {
      [Routes.Register]: 'register',
      [Routes.Login]: 'login',
    }
    return AuthFormApi[pageMethodMap[page]]
  }
  const submitMethod = getAuthFormApiMethod(page)
  return submitMethod(user)
}
const getHeader = (page: Routes) => {
  const headerMap = {
    [Routes.Register]: 'Register',
    [Routes.Login]: 'Login',
  }
  return headerMap[page]
}

const AuthForm: React.FC<RouteComponentProps<User>> = ({
  path = DefaultPath,
  username = '',
  password = '',
}) => {
  const {values, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      username,
      password,
    },
    validate: validateForm,
    onSubmit: async (user: User) => {
      try {
        await submitForm(path, user)
        navigate(Routes.Home)
      } catch (err) {
        navigate(Routes.Error)
      }
    },
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
export default AuthForm

export * from './const'

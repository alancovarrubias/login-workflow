import {AuthApi} from '../api'
import {navigate} from '@reach/router'
import {User} from './index'

const getAuthApiMethod = (page: string) => {
  const pageMethodMap = {
    '/sign-up': 'signUp',
    '/login': 'login',
  }
  return AuthApi[pageMethodMap[page]]
}
const handleSuccess = (): void => navigate('/home')
const handleError = (): void => navigate('/error')
export const submitForm = (page: string, user: User): void => {
  const submitMethod = getAuthApiMethod(page)
  submitMethod(user).then(handleSuccess, handleError)
}

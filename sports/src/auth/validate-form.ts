import {User} from './index'

export const validateForm = (user: User): User => {
  const errors: User = {}
  if (!user.username) {
    errors.username = 'Required'
  }
  if (!user.password) {
    errors.password = 'Required'
  }
  return errors
}

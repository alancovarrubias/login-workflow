import User from '@utils/models/user'

export const username = 'TEST_USERNAME'
export const password = 'TEST_PASSWORD'
export const ValidUser: User = {
  username,
  password,
}
export const InvalidUser: User = {
  username: '',
  password: '',
}

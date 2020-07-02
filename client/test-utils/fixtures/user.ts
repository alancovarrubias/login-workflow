import User from '@utils/models/user'

export const id = 'TEST_ID'
export const username = 'TEST_USERNAME'
export const password = 'TEST_PASSWORD'
export const ValidUser: User = {
  id,
  username,
  password,
}
export const InvalidUser: User = {
  id: '',
  username: '',
  password: '',
}

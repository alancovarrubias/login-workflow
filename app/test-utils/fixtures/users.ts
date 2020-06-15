export interface User {
  username: string
  password: string
}
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

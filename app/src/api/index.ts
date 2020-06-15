import User from '@utils/models/user'
import {createRequester} from './requester'

type Requester = {
  post?: Function
}
class Api {
  constructor(private requester: Requester = createRequester()) {}
  register = (user: User): Promise<string> =>
    this.requester.post('users', {user})
  login = (user: User): Promise<string> =>
    this.requester.post('session', {user})
}

export const AuthFormApi = new Api()
export default Api

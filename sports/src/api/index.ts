import {createRequester} from './requester'
import {User} from '../auth'
type Requester = {
  post?: Function
}
class Api {
  constructor(private requester: Requester = createRequester()) {}
  signUp = (user: User): Promise<string> => this.requester.post('users', {user})
  login = (user: User): Promise<string> =>
    this.requester.post('session', {user})
}

export const AuthApi = new Api()
export default Api

import User from '@utils/models/user'
import {createRequester} from './requester'

type Requester = {
  post?: Function
  delete?: Function
}
class Api {
  constructor(private requester: Requester = createRequester()) {}
  register = async (user: User): Promise<string> => {
    const res = await this.requester.post('users', {user})
    localStorage.setItem('user', JSON.stringify(res))
    return res
  }
  login = async (user: User): Promise<string> => {
    const res = await this.requester.post('session', {user})
    localStorage.setItem('user', JSON.stringify(res))
    return res
  }
  logout = async (user: User): Promise<string> => {
    const res = await this.requester.delete('session', {user})
    localStorage.removeItem('user')
    return res
  }
}

export const AuthFormApi = new Api()
export default Api

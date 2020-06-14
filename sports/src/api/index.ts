import {createRequester} from './requester'
type Requester = {
  post?: Function
}
class Api {
  constructor(private requester: Requester = createRequester()) {}
  signUp = (username: string, password: string): Promise<string> =>
    this.requester.post('users', {username, password})
}

export default Api

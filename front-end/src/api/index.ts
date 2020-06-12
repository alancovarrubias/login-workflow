import axios from 'axios'
export default class Api {
  login(username: string, password: string): Promise<string> {
    return axios.get(username + password)
  }
}

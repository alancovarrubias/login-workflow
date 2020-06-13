import axios from 'axios'
import {getData, handleRequestFailure} from '../../test-utils/api'

axios.interceptors.response.use(getData, handleRequestFailure)
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.xsrfCookieName = 'CSRF-TOKEN'
axios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000'

interface Requester {
  get?: Function
  post?: Function
}

export default class Api {
  public signUp(username: string, password: string): Promise<string> {
    return axios.post('users', {username, password})
  }
}

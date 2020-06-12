import axios from 'axios'
import {getData, handleRequestFailure} from '../../test-utils/api'
function buildApi() {
  const baseURL = 'http://localhost:3000'
  const api = axios.create({baseURL})
  api.interceptors.response.use(getData, handleRequestFailure)
  return api
}

interface Requester {
  get?: Function
  post?: Function
}
export default class Api {
  constructor(private api: Requester = buildApi()) {}
  signUp(username: string, password: string): Promise<string> {
    return this.api.post('users', {username, password})
  }
}

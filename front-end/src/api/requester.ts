import axios, {AxiosResponse, AxiosInstance} from 'axios'

export const getData = (response: AxiosResponse): AxiosResponse => response.data
export const handleRequestFailure = (
  response: AxiosResponse,
): Promise<Error> => {
  const {data, status} = response
  const error: Error & {status?: number; data?: string} = new Error(
    `${status}: ${JSON.stringify(data)}`,
  )
  // remove parts of the stack trace so the error message (codeframe) shows up
  // at the code where the actual problem is.
  error.stack = error.stack
    .split('\n')
    .filter(
      line =>
        !line.includes('at handleRequestFailure') &&
        !line.includes('at processTicksAndRejections'),
    )
    .join('\n')
  error.status = status
  error.data = data
  return Promise.reject(error)
}

export const createRequester = (
  baseURL = 'http://localhost:3000',
): AxiosInstance => {
  const customAxios = axios.create()
  customAxios.interceptors.response.use(getData, handleRequestFailure)
  customAxios.defaults.headers.post['Content-Type'] = 'application/json'
  customAxios.defaults.xsrfCookieName = 'CSRF-TOKEN'
  customAxios.defaults.xsrfHeaderName = 'X-CSRF-TOKEN'
  customAxios.defaults.withCredentials = true
  customAxios.defaults.baseURL = baseURL
  return customAxios
}

export default createRequester

import {AxiosResponse} from 'axios'
import {getData, handleRequestFailure, createRequester} from '../requester'

jest.mock('axios', () => ({
  create: () => ({
    defaults: {headers: {post: {}}},
    interceptors: {
      response: {
        use: jest.fn(),
      },
    },
  }),
}))
describe('getData', () => {
  test('returns data property', async () => {
    const mockResponse = {data: {}} as AxiosResponse
    const data = getData(mockResponse)
    expect(data).toBe(mockResponse.data)
  })
})
describe('handleRequestFailure', () => {
  test('return error promise', async () => {
    const data = 'MOCK_DATA'
    const status = 200
    const mockResponse = {data, status} as AxiosResponse
    await handleRequestFailure(mockResponse).catch(error => {
      expect(error.data).toBe(data)
      expect(error.status).toBe(status)
    })
  })
})

describe('createRequester', () => {
  test('default baseURL', async () => {
    const mockAxios = createRequester()
    expect(mockAxios.defaults.baseURL).toBe('http://localhost:3000')
  })
  test('provided baseURL', async () => {
    const baseURL = 'TEST_URL'
    const mockAxios = createRequester(baseURL)
    expect(mockAxios.defaults.baseURL).toBe(baseURL)
  })
})

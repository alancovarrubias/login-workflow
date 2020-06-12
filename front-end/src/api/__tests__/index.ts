import axios from 'axios'
import Api from '../'
jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Api', () => {
  describe('login', () => {
    test('function is called', () => {
      const api = new Api()
      const username = 'TEST_USERNAME'
      const password = 'TEST_PASSWORD'
      api.login(username, password)
      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    })
  })
})

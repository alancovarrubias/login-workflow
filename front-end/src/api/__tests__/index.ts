import Api from '../'
import axios from 'axios'
jest.mock('axios')

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
describe('Api', () => {
  describe('signUp', () => {
    test('post request is sent to users controller', () => {
      const api = new Api()
      api.signUp(username, password)
      expect(axios.post).toHaveBeenCalledTimes(1)
      expect(axios.post).toHaveBeenCalledWith('users', {
        username,
        password,
      })
    })
  })
})

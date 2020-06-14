import Api from '../index'
import {createRequester} from '../requester'

const mockRequester = {}
jest.mock('../requester', () => ({
  createRequester: jest.fn(() => mockRequester),
}))
const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
describe('Api', () => {
  describe('signUp', () => {
    test('default requester', () => {
      const api = new Api()
      expect(api['requester']).toBe(mockRequester)
      expect(createRequester).toHaveBeenCalled()
    })
    test('post request is sent to users controller', async () => {
      const mockRequester = {post: jest.fn()}
      const api = new Api(mockRequester)
      await api.signUp(username, password)
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
    })
  })
})

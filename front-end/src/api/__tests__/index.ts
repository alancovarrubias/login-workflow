import Api from '../index'

const mockRequester = {}
jest.mock('../requester', () => ({
  createRequester: jest.fn(() => mockRequester),
}))
const user = {username: 'TEST_USERNAME', password: 'TEST_PASSWORD'}
describe('Api', () => {
  test('default requester', () => {
    const api = new Api()
    expect(api['requester']).toBe(mockRequester)
  })
  describe('login', () => {
    test('post request is sent to sessions controller', async () => {
      const mockRequester = {post: jest.fn()}
      const api = new Api(mockRequester)
      await api.login(user)
      expect(mockRequester.post).toHaveBeenCalledWith('session', {user})
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
    })
  })
  describe('register', () => {
    test('post request is sent to users controller', async () => {
      const mockRequester = {post: jest.fn()}
      const api = new Api(mockRequester)
      await api.register(user)
      expect(mockRequester.post).toHaveBeenCalledWith('users', {user})
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
    })
  })
})

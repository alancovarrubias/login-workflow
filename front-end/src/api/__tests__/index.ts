import Api from '../'

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
describe('Api', () => {
  describe('signUp', () => {
    test('post request is sent to users controller', () => {
      const mockRequester = {get: jest.fn(), post: jest.fn()}
      const api = new Api(mockRequester)
      api.signUp(username, password)
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
      expect(mockRequester.post).toHaveBeenCalledWith('users', {
        username,
        password,
      })
    })
  })
})

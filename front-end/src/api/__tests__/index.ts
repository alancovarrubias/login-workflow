import Api from '../index'

const username = 'TEST_USERNAME'
const password = 'TEST_PASSWORD'
describe('Api', () => {
  describe('signUp', () => {
    test('post request is sent to users controller', async () => {
      const mockRequester = {post: jest.fn()}
      const api = new Api(mockRequester)
      await api.signUp(username, password)
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
    })
  })
})

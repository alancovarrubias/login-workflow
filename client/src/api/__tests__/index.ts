import Api from '../index'
import {ValidUser} from '@test-utils/fixtures/user'

const ValidUserResponse = {id: ValidUser.id, username: ValidUser.username}
const mockRequester = {}
jest.mock('../requester', () => ({
  createRequester: jest.fn(() => mockRequester),
}))

describe('Api', () => {
  test('default requester', () => {
    const api = new Api()
    expect(api['requester']).toBe(mockRequester)
  })
  describe('login', () => {
    test('post request is sent to sessions controller', async () => {
      const mockRequester = {
        post: jest.fn(() => Promise.resolve(ValidUserResponse)),
      }

      const api = new Api(mockRequester)
      await api.login(ValidUser)
      expect(mockRequester.post).toHaveBeenCalledWith('session', {
        user: ValidUser,
      })
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
      expect(JSON.parse(localStorage.getItem('user'))).toEqual({
        id: ValidUser.id,
        username: ValidUser.username,
      })
    })
  })
  describe('register', () => {
    test('post request is sent to users controller', async () => {
      const mockRequester = {
        post: jest.fn(() => Promise.resolve(ValidUserResponse)),
      }
      const api = new Api(mockRequester)
      await api.register(ValidUser)
      expect(mockRequester.post).toHaveBeenCalledWith('users', {
        user: ValidUser,
      })
      expect(mockRequester.post).toHaveBeenCalledTimes(1)
      expect(JSON.parse(localStorage.getItem('user'))).toEqual({
        id: ValidUser.id,
        username: ValidUser.username,
      })
    })
  })
  describe('logout', () => {
    test('post request is sent to users controller', async () => {
      const mockRequester = {
        delete: jest.fn(() => Promise.resolve(ValidUserResponse)),
      }
      const api = new Api(mockRequester)
      await api.logout(ValidUser)
      expect(mockRequester.delete).toHaveBeenCalledWith('session', {
        user: ValidUser,
      })
      expect(mockRequester.delete).toHaveBeenCalledTimes(1)
      expect(localStorage.getItem('user')).toBeNull()
    })
  })
})

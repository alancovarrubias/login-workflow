import React from 'react'
import {render} from '../../test-utils/router'
import Main from '../main'

const TEST_COLOR = 'white'
const TEST_IDS = {
  displayContainer: 'display-container',
}
function renderMain() {
  return render(<Main />)
}
describe('Main', () => {
  it('renders the home page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate('/home')
    expect(container).toHaveTextContent(/home/i)
  })
  it('renders the login page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate('/login')
    expect(container).toHaveTextContent(/login/i)
  })
  it('renders the register page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate('/register')
    expect(container).toHaveTextContent(/register/i)
  })
  it('renders the error page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate('/error')
    expect(container).toHaveTextContent(/error/i)
  })
})

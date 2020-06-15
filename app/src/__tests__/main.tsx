import React from 'react'
import {render} from '@test-utils/router'
import {Routes} from '../../utils/routes'
import Main from '../main'

function renderMain() {
  return render(<Main />)
}
describe('Main', () => {
  it('renders the login page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Login)
    expect(container).toHaveTextContent(/login/i)
  })
  it('renders the register page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Register)
    expect(container).toHaveTextContent(/register/i)
  })
  it('renders the home page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Home)
    expect(container).toHaveTextContent(/home/i)
  })
  it('renders the error page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Error)
    expect(container).toHaveTextContent(/error/i)
  })
})

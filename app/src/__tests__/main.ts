import {Routes} from '@utils/routes'
import {renderMain} from './_utils'

describe('Main', () => {
  it('renders the login page by default', async () => {
    const {container} = renderMain()
    expect(container).toHaveTextContent(/login/i)
  })
  it('/login renders the login page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Login)
    expect(container).toHaveTextContent(/login/i)
  })
  it('/register renders the register page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Register)
    expect(container).toHaveTextContent(/register/i)
  })
  it('/home renders the home page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Home)
    expect(container).toHaveTextContent(/home/i)
  })
  it('/error renders the error page', async () => {
    const {
      container,
      history: {navigate},
    } = renderMain()
    await navigate(Routes.Error)
    expect(container).toHaveTextContent(/error/i)
  })
})

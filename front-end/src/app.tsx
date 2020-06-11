import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import LoginForm from './login-form'
import * as themes from './themes'

const App: React.FC<{}> = (): JSX.Element => {
  const [theme, setTheme] = React.useState('dark')
  const handleThemeChange = ({target: {value}}) => setTheme(value)
  return (
    <React.Fragment>
      <ThemeProvider theme={themes[theme]}>
        <h1>App</h1>
        <LoginForm />
        <div style={{marginTop: 30}}>
          <fieldset>
            <legend>Theme</legend>
            <label>
              <input
                onChange={handleThemeChange}
                checked={theme === 'light'}
                type="radio"
                name="theme"
                value="light"
              />{' '}
              light
            </label>
            <label>
              <input
                onChange={handleThemeChange}
                checked={theme === 'dark'}
                type="radio"
                name="theme"
                value="dark"
              />{' '}
              dark
            </label>
          </fieldset>
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import LoginForm from './login-form'
import * as themes from './themes'

function App(): React.FC<{}> {
  const [theme, setTheme] = React.useState('dark')
  const handleThemeChange = ({target: {value}}) => setTheme(value)
  return (
    <div>
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
    </div>
  )
}
export default App

import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import LoginForm from './login-form'
import {Themes, themeOptionsMap} from './themes'

const App: React.FC<{}> = (): JSX.Element => {
  const [currentTheme, setTheme] = React.useState(Themes.DARK)
  const handleThemeChange = ({target: {value}}) => setTheme(value)
  return (
    <React.Fragment>
      <ThemeProvider theme={themeOptionsMap[currentTheme]}>
        <h1>App</h1>
        <LoginForm />
        <div style={{marginTop: 30}}>
          <fieldset>
            <legend>Theme</legend>
            {['dark', 'light'].map((theme, index) => {
              return (
                <label key={index}>
                  <input
                    onChange={handleThemeChange}
                    checked={theme === currentTheme}
                    type="radio"
                    name="theme"
                    value={theme}
                  />
                  {` ${theme}`}
                </label>
              )
            })}
          </fieldset>
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

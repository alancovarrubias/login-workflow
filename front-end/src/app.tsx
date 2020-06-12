import React from 'react'
import styled from '@emotion/styled'
import {ThemeProvider} from 'emotion-theming'
import {Themes, themeOptionsMap, ThemeOptions} from './themes'
import LoginForm from './login-form'

const DisplayContainer = styled.div(
  {
    position: 'relative',
    lineHeight: '13px',
  },
  ({theme}: {theme: ThemeOptions}) => ({
    color: theme.displayTextColor,
    background: theme.displayBackgroundColor,
  }),
)
const App: React.FC<{}> = (): JSX.Element => {
  const [currentTheme, setCurrentTheme] = React.useState(Themes.DARK)
  const handleThemeChange = ({target: {value}}) => setCurrentTheme(value)
  return (
    <React.Fragment>
      <ThemeProvider theme={themeOptionsMap[currentTheme]}>
        <h1>App</h1>
        <LoginForm />
        <DisplayContainer style={{marginTop: 30}}>
          <fieldset>
            <legend>Theme</legend>
            {[Themes.DARK, Themes.LIGHT].map((theme, index) => {
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
        </DisplayContainer>
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

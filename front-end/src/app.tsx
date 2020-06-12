import React, {FunctionComponent} from 'react'
import {ThemeProvider} from 'emotion-theming'
import {defaultTheme, themeOptionsMap, Theme} from './themes'
import LoginForm from './login-form'
import ThemePicker from './theme-picker'

const App: FunctionComponent<{}> = (): JSX.Element => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme)
  const handleThemeChange = event => setTheme(event.target.value)
  return (
    <React.Fragment>
      <ThemeProvider theme={themeOptionsMap[theme]}>
        <h1>Sports App</h1>
        <LoginForm />
        <ThemePicker theme={theme} onThemeChange={handleThemeChange} />
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

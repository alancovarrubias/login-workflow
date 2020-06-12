import React, {FunctionComponent} from 'react'
import {ThemeProvider} from 'emotion-theming'
import {Themes, themeOptionsMap} from './themes'
import LoginForm from './login-form'
import ThemePicker from './theme-picker'

const App: FunctionComponent<{}> = (): JSX.Element => {
  const [theme, setTheme] = React.useState(Themes.DARK)
  const handleThemeChange = ({target: value}) => setTheme(value)
  return (
    <React.Fragment>
      <ThemeProvider theme={themeOptionsMap[theme]}>
        <h1>App</h1>
        <LoginForm />
        <ThemePicker theme={theme} onThemeChange={handleThemeChange} />
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

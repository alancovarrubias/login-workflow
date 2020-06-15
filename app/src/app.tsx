import React, {useState} from 'react'
import Main from './main'
import {ThemeProvider, DefaultTheme} from './themes'

const App: React.FunctionComponent<{}> = () => {
  const [theme, setTheme] = useState(DefaultTheme)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <Main />
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

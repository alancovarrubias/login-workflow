import React, {useState} from 'react'
import Main from './main'
import {ThemeProvider, defaultTheme} from './themes'

const App: React.FunctionComponent<{}> = () => {
  const [theme, setTheme] = useState(defaultTheme)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <Main />
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

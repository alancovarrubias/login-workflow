import React, {useState} from 'react'
import {ThemeProvider, DefaultTheme} from './themes'
import Header from './header'
import Main from './main'
import Footer from './footer'

const App: React.FunctionComponent<{}> = () => {
  const [theme, setTheme] = useState(DefaultTheme)
  return (
    <React.Fragment>
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}
export default App

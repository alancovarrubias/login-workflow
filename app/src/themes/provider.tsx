import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'
import {ThemeProps, EmotionThemeValues, DefaultTheme} from './const'
import {ThemeContext} from './context'

export const ThemeProvider: React.FC<ThemeProps> = ({
  theme = DefaultTheme,
  setTheme,
  children,
}) => {
  const contextValues: ThemeProps = {theme, setTheme}
  const emotionThemeValue = EmotionThemeValues[theme]
  return (
    <ThemeContext.Provider value={contextValues}>
      <EmotionThemeProvider theme={emotionThemeValue}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

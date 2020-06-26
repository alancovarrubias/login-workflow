import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'
import {ThemeProps, EmotionThemeValues} from './const'
import {ThemeContext} from './context'

export const ThemeProvider: React.FC<ThemeProps> = ({
  theme,
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

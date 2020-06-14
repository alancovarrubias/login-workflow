import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'
import {
  ThemeProps,
  ThemeContext,
  emotionThemeValuesMap,
  defaultTheme,
} from './index'

export const ThemeProvider: React.FC<ThemeProps> = ({
  theme = defaultTheme,
  setTheme,
  children,
}) => {
  const contextValues = {theme, setTheme}
  const emotionThemeValues = emotionThemeValuesMap[theme]
  return (
    <ThemeContext.Provider value={contextValues}>
      <EmotionThemeProvider theme={emotionThemeValues}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

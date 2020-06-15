import React from 'react'
import {ThemeProvider as EmotionThemeProvider} from 'emotion-theming'
import {
  ThemeProps,
  ThemeContext,
  EmotionThemeValuesMap,
  DefaultTheme,
} from './index'

export const ThemeProvider: React.FC<ThemeProps> = ({
  theme = DefaultTheme,
  setTheme,
  children,
}) => {
  const contextValues = {theme, setTheme}
  const emotionThemeValues = EmotionThemeValuesMap[String(theme)]
  return (
    <ThemeContext.Provider value={contextValues}>
      <EmotionThemeProvider theme={emotionThemeValues}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  )
}

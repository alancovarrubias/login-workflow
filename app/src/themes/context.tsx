import React from 'react'
import {ThemeProps, DefaultTheme} from './const'

export const ThemeContext = React.createContext<ThemeProps>({
  theme: DefaultTheme,
})

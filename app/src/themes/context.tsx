import React from 'react'
import {ThemeProps, DefaultTheme} from './index'

export const ThemeContext = React.createContext<ThemeProps>({
  theme: DefaultTheme,
})

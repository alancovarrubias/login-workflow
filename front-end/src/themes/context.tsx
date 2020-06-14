import React from 'react'
import {ThemeProps, defaultTheme} from './index'

export const ThemeContext = React.createContext<ThemeProps>({
  theme: defaultTheme,
})

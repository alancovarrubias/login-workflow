export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
export interface ThemeOptions {
  displayTextColor?: string
  displayBackgroundColor?: string
}

export interface ThemeMap {
  theme?: ThemeOptions
  [Theme.DARK]?: ThemeOptions
  [Theme.LIGHT]?: ThemeOptions
}

export const themeOptionsMap: ThemeMap = {
  [Theme.DARK]: {
    displayTextColor: 'white',
    displayBackgroundColor: '#1c191c',
  },
  [Theme.LIGHT]: {
    displayTextColor: '#1c191c',
    displayBackgroundColor: 'white',
  },
}

export const themeList: Theme[] = Object.values(Theme)
export const defaultTheme: Theme = Theme.DARK
export const nonDefaultTheme: Theme = Theme.LIGHT

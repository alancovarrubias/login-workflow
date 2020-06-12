export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeOptions {
  displayTextColor?: string
  displayBackgroundColor?: string
}

export const themeOptionsMap = {
  [Themes.DARK]: {
    displayTextColor: 'white',
    displayBackgroundColor: '#1c191c',
  },
  [Themes.LIGHT]: {
    displayTextColor: '#1c191c',
    displayBackgroundColor: 'white',
  },
}

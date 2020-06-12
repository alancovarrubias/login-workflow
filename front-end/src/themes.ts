export enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ThemeOptions {
  displayTextColor?: string
  displayBackgroundColor?: string
}

export const ThemeList = Object.values(Themes)

export const DefaultTheme = Themes.DARK
export const NonDefaultTheme = Themes.LIGHT

export const themeOptionsMap: {[name: string]: ThemeOptions} = {
  [Themes.DARK]: {
    displayTextColor: 'white',
    displayBackgroundColor: '#1c191c',
  },
  [Themes.LIGHT]: {
    displayTextColor: '#1c191c',
    displayBackgroundColor: 'white',
  },
}

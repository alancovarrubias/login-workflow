export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
export const availableThemes: Theme[] = Object.values(Theme)
export const defaultTheme: Theme = Theme.DARK
export const nonDefaultTheme: Theme = Theme.LIGHT
export const emotionThemeValuesMap: ThemeMap = {
  [Theme.DARK]: {
    displayTextColor: 'white',
    displayBackgroundColor: '#1c191c',
  },
  [Theme.LIGHT]: {
    displayTextColor: '#1c191c',
    displayBackgroundColor: 'white',
  },
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
export type ThemeProps = {
  theme: Theme
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}
export * from './context'
export * from './provider'

export enum Theme {
  Dark,
  Light,
}
export type AvailableThemes = keyof typeof Theme
export interface ThemeOptions {
  color?: string
  backgroundColor?: string
}
export interface ThemeMap {
  [key: string]: ThemeOptions
}
export const DefaultTheme: Theme = Theme.Dark
export const NonDefaultTheme: Theme = Theme.Light
export const Themes = Object.keys(Theme).filter(
  key => !isNaN((key as unknown) as number),
)
export const EmotionThemeValuesMap: ThemeMap = {
  [Theme.Dark]: {
    color: 'white',
    backgroundColor: '#1c191c',
  },
  [Theme.Light]: {
    color: '#1c191c',
    backgroundColor: 'white',
  },
}

export type ThemeProps = {
  theme: Theme
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}
export * from './context'
export * from './provider'

export enum Theme {
  Dark,
  Light,
}
export interface ThemeProps {
  theme: Theme
  setTheme?: React.Dispatch<React.SetStateAction<Theme>>
}
export const DefaultTheme: Theme = Theme.Dark
export const Themes = Object.keys(Theme).filter(
  key => !isNaN((key as unknown) as number),
)
export const EmotionThemeValues = {
  [Theme.Dark]: {
    color: 'white',
    backgroundColor: '#1c191c',
  },
  [Theme.Light]: {
    color: '#1c191c',
    backgroundColor: 'white',
  },
}

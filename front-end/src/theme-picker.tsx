import React, {ChangeEvent} from 'react'
import styled from '@emotion/styled'
import {ThemeMap, Theme, defaultTheme, themeList} from './themes'

const DisplayContainer = styled.div(
  {
    input: {
      cursor: 'pointer',
    },
  },
  ({theme}: ThemeMap) => ({
    color: theme.displayTextColor,
    background: theme.displayBackgroundColor,
  }),
)
interface ThemePickerProps {
  theme?: Theme
  onThemeChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const ThemePicker = ({
  theme = defaultTheme,
  onThemeChange,
}: ThemePickerProps): JSX.Element => {
  return (
    <DisplayContainer data-testid="display-container" style={{marginTop: 30}}>
      <fieldset>
        <legend>Themes</legend>
        {themeList.map((themeValue, index) => {
          return (
            <label key={index}>
              {` ${themeValue}`}
              <input
                id={`theme-${themeValue}`}
                data-testid={`theme-${themeValue}`}
                value={themeValue}
                checked={theme === themeValue}
                onChange={onThemeChange}
                type="radio"
              />
            </label>
          )
        })}
      </fieldset>
    </DisplayContainer>
  )
}
export default ThemePicker

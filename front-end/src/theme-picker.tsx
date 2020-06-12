import React, {ChangeEvent} from 'react'
import styled from '@emotion/styled'
import {ThemeOptions, DefaultTheme, ThemeList} from './themes'

const DisplayContainer = styled.div(
  {
    position: 'relative',
    lineHeight: '13px',
  },
  ({theme}: {theme: ThemeOptions}) => ({
    color: theme.displayTextColor,
    background: theme.displayBackgroundColor,
  }),
)
interface ThemePickerProps {
  theme?: string
  onThemeChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const ThemePicker = ({
  theme = DefaultTheme,
  onThemeChange,
}: ThemePickerProps): JSX.Element => {
  return (
    <DisplayContainer data-testid="display-container" style={{marginTop: 30}}>
      <fieldset>
        <legend>Theme</legend>
        {ThemeList.map((themeValue, index) => {
          return (
            <label key={index}>
              {` ${themeValue}`}
              <input
                id={themeValue}
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

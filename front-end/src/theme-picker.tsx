import React, {ChangeEvent} from 'react'
import styled from '@emotion/styled'
import {Themes, ThemeOptions} from './themes'

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
  onThemeChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const ThemePicker = ({theme, onThemeChange}: ThemePickerProps): JSX.Element => {
  const themes = [Themes.DARK, Themes.LIGHT]
  return (
    <DisplayContainer data-testid="display-container" style={{marginTop: 30}}>
      <fieldset>
        <legend>Theme</legend>
        {themes.map((themeValue, index) => {
          return (
            <label key={index}>
              {` ${themeValue}`}
              <input
                id={themeValue}
                data-testid={themeValue}
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

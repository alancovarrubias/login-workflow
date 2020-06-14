import React from 'react'
import styled from '@emotion/styled'
import {
  Theme,
  ThemeMap,
  ThemeProps,
  ThemeContext,
  availableThemes,
} from './themes'

const DisplayContainer = styled.div(
  {
    input: {
      cursor: 'pointer',
    },
  },
  ({theme: {displayTextColor, displayBackgroundColor}}: ThemeMap) => ({
    color: displayTextColor,
    background: displayBackgroundColor,
  }),
)
const Footer: React.FC<{}> = () => {
  const mapEvent = (themeContext: ThemeProps) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const theme = event.target.value as Theme
      themeContext.setTheme(theme)
    }
  }
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <DisplayContainer
          data-testid="display-container"
          style={{marginTop: 30}}
        >
          <fieldset>
            <legend>Themes</legend>
            {availableThemes.map((theme, index) => {
              return (
                <label key={index}>
                  {` ${theme}`}
                  <input
                    id={`theme-${theme}`}
                    data-testid={`theme-${theme}`}
                    value={theme}
                    checked={theme === themeContext.theme}
                    onChange={mapEvent(themeContext)}
                    type="radio"
                  />
                </label>
              )
            })}
          </fieldset>
        </DisplayContainer>
      )}
    </ThemeContext.Consumer>
  )
}
export default Footer

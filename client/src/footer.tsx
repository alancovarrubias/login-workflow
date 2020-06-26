import React from 'react'
import styled from '@emotion/styled'
import {useTheme} from 'emotion-theming'
import {Theme, ThemeProps, ThemeContext, Themes} from './themes'

const DisplayContainer = styled.div({
  input: {
    cursor: 'pointer',
  },
  marginTop: 30,
})
const Footer: React.FC<{}> = () => {
  const theme = useTheme()
  const mapEvent = (themeContext: ThemeProps) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const theme = Number(event.target.value)
      themeContext.setTheme(theme)
    }
  }
  return (
    <ThemeContext.Consumer>
      {themeContext => (
        <DisplayContainer data-testid="display-container" style={theme}>
          <fieldset>
            <legend>Themes</legend>
            {Themes.map((theme, index) => {
              return (
                <label key={index}>
                  {` ${Theme[theme]}`}
                  <input
                    id={`theme-${theme}`}
                    data-testid={`theme-${theme}`}
                    value={theme}
                    checked={Number(theme) === themeContext.theme}
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

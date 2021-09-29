import { ThemeProvider } from 'emotion-theming'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { colors } from '../src/design-token'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((storyFn) => (
  <ThemeProvider theme={{colors: colors.light.scheme}}>
    {storyFn()}
  </ThemeProvider>
))
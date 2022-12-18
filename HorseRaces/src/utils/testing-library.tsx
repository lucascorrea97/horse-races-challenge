// Libraries
import React from 'react'
import { ThemeProvider } from '@shopify/restyle'
import { render as rntlRender } from '@testing-library/react-native'

// Utils
import theme from './theme'

function render(UI: JSX.Element) {
  return rntlRender(UI, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  })
}

export * from '@testing-library/react-native'
export { render }

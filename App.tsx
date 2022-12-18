// Libraries
import React from 'react'
import { SafeAreaView } from 'react-native'
import { ThemeProvider } from '@shopify/restyle'

// Utils
import theme from './src/utils/theme'

// Contexts
import GlobalStateProvider from './src/contexts/global-context'

// Screens
import HorseRacesLandingScreen from './src/screens/horse-races-lading-screen/horse-races-landing-screen'

const App = () => {
  return (
    <SafeAreaView>
      <GlobalStateProvider>
        <ThemeProvider theme={theme}>
          <HorseRacesLandingScreen />
        </ThemeProvider>
      </GlobalStateProvider>
    </SafeAreaView>
  )
}

export default App

// Libraries
import React from 'react'

// Contexts
import HorseRacesProvider from './horse-races-provider'

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  return <HorseRacesProvider>{children}</HorseRacesProvider>
}

export default GlobalStateProvider

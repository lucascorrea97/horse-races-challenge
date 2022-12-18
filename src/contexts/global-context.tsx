// Libraries
import React from 'react'

// Contexts
import HorseRacesProvider from './horse-races-provider'

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  // @ts-ignore "children" was removed from the regular functional component in the Provider element
  return <HorseRacesProvider>{children}</HorseRacesProvider>
}

export default GlobalStateProvider

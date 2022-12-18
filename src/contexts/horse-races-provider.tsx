// Libraries
import React, { useState } from 'react'

// Types
import { HorseRacesContextData } from './horse-races-provider.types'

// Context
import { HorseRacesContext } from './horse-races.context'

export const defaultHorseRacesData: HorseRacesContextData = {
  data: {
    next_to_go_ids: [],
    race_summaries: {},
  },
  isLoading: false,
  nextToGoRaces: [],
  setHorseRacesData: () => {},
}

const HorseRacesProvider = ({ children }: { children: React.ReactNode }) => {
  const [horseRacesData, setHorseRacesData] = useState(defaultHorseRacesData)
  return (
    <HorseRacesContext.Provider
      value={{ ...horseRacesData, setHorseRacesData }}>
      {children}
    </HorseRacesContext.Provider>
  )
}

export default HorseRacesProvider

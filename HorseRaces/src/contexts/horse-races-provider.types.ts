// Types
import { Race } from '../types/races.types'
import { HorseRacesGetPayload } from '../actions/get-horse-races.types'

export type HorseRacesContextData = {
  isLoading: boolean
  nextToGoRaces: Race[]
  setHorseRacesData: (horseRacesData: HorseRacesContextData) => void
} & HorseRacesGetPayload

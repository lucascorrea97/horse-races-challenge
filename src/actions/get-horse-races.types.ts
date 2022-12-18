// Types
import { Race } from '../types/races.types'

export type HorseRacesGetPayload = {
  data: {
    race_summaries: { [key: string]: Race }
    next_to_go_ids?: string[]
  }
  status: number
  message: string
}

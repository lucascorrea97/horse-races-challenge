// Fixtures
import { mockRacingResponse } from './racing.fixtures'

// Types
import { Race } from '../types/races.types'

export const mockedRaces: Race[] = Object.values(
  mockRacingResponse.data.race_summaries,
)

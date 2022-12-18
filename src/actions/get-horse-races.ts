// Types
import { HorseRacesGetPayload } from './get-horse-races.types'

export const getHorseRaces = async (): Promise<HorseRacesGetPayload> => {
  return fetch(
    'https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => response.json())
    .then((data) => {
      return data
    })
}

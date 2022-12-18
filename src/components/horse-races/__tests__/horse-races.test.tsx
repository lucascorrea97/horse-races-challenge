// Libraries
import React from 'react'

// Providers
import HorseRacesProvider from '../../../contexts/horse-races-provider'

// Fixtures
import { mockRacingResponse } from '../../../fixtures/racing.fixtures'

// Screens
import HorseRacesLandingScreen from '../../../screens/horse-races-lading-screen/horse-races-landing-screen'

// Utils
import { fireEvent, render, waitFor } from '../../../utils/testing-library'

// Constants
import { RACE_CATEGORIES } from '../../categories/categories.constants'

jest.mock('../../../actions/get-horse-races', () => ({
  getHorseRaces: () => new Promise((resolve) => resolve(mockRacingResponse)),
}))

describe('horse-races', () => {
  it('Selects Greyhound category then unselects it', async () => {
    // Race with highest advertised time
    const firstRace =
      mockRacingResponse.data.race_summaries[
        'f24851e3-49ed-46f7-b6fd-2b8c08c037f8'
      ]
    const greyHoundRace =
      mockRacingResponse.data.race_summaries[
        'e2f5d42a-6fb5-4884-bda2-6173ec86ea88'
      ]
    const { getByText, queryByText } = render(
      <HorseRacesProvider>
        <HorseRacesLandingScreen />
      </HorseRacesProvider>,
    )

    // Finds first race which is not from the greyhound category
    const firstRaceElement = await waitFor(() =>
      getByText(firstRace.meeting_name),
    )
    expect(firstRaceElement).toBeDefined()

    // Filters races using the greyhound category
    const greyHoundFilterButton = getByText(RACE_CATEGORIES[0].displayName)
    fireEvent.press(greyHoundFilterButton)

    // Confirms the first race has been filtered out
    expect(queryByText(firstRace.meeting_name)).toBeNull()

    // Confirms the greyhound race is displayed
    const greyHoundRaceElement = getByText(greyHoundRace.meeting_name)
    expect(greyHoundRaceElement).toBeDefined()

    // Unselects the greyhound category
    fireEvent.press(greyHoundFilterButton)

    // Confirms both races are shown
    expect(getByText(firstRace.meeting_name)).toBeDefined()
    expect(getByText(greyHoundRace.meeting_name)).toBeDefined()
  })
})

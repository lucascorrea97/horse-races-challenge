// Libraries
import React from 'react'

// Components
import RaceList from '../race-list'

// Utils
import { render } from '../../../utils/testing-library'

// Fixtures
import { mockedRaces } from './race-list.fixtures'

describe('race-list', () => {
  it('Shows empty list text when no results', () => {
    const { getByText } = render(<RaceList races={[]} />)
    const noResultsText = getByText("We didn't find any races")
    expect(noResultsText).toBeDefined()
  })
  it('Shows race list when data is provided - Checks first and last item', () => {
    const { getByText, queryAllByText } = render(
      <RaceList races={mockedRaces} />,
    )
    const firstRace = mockedRaces[0]
    const lastRace = mockedRaces[mockedRaces.length - 1]

    const firstRaceDisplayName = getByText(firstRace.meeting_name)
    const firstRaceNumber = queryAllByText(`R${firstRace.race_number}`)

    const lastRaceDisplayName = getByText(lastRace.meeting_name)
    const lastRaceNumber = queryAllByText(`R${lastRace.race_number}`)

    expect(firstRaceDisplayName).toBeDefined()
    expect(firstRaceNumber).toBeTruthy()

    expect(lastRaceDisplayName).toBeDefined()
    expect(lastRaceNumber).toBeTruthy()
  })
})

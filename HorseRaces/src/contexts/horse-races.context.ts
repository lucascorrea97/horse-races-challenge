// Libraries
import { useContext, useState, useCallback, createContext } from 'react'

// Actions
import { getHorseRaces } from '../actions/get-horse-races'

// Types
import { Race } from '../types/races.types'
import { HorseRacesGetPayload } from '../actions/get-horse-races.types'

// Providers
import { defaultHorseRacesData } from './horse-races-provider'

export const HorseRacesContext = createContext(defaultHorseRacesData)

export const useHorseRacesContext = () => {
  const horseRacesContextData = useContext(HorseRacesContext)

  const [upcomingRacesIds, setUpcomingRacesIds] = useState<string[]>([])
  const [nextToGoIds, setNextToGoIds] = useState<string[]>([])

  const raceSummaries = horseRacesContextData?.data?.race_summaries
  const dataNextToGoIds = horseRacesContextData?.data?.next_to_go_ids
  const nextToGoRaces = horseRacesContextData?.nextToGoRaces
  const isLoading = horseRacesContextData?.isLoading
  const setHorseRacesData = horseRacesContextData?.setHorseRacesData

  const hasData = !!raceSummaries && !!dataNextToGoIds

  const fetchHorseRaces = () => {
    horseRacesContextData.setHorseRacesData({
      ...horseRacesContextData,
      isLoading: true,
    })
    getHorseRaces().then((payload: HorseRacesGetPayload) => {
      const sortedNextToGoIds = sortDataTimeAscending(
        payload.data.race_summaries,
      )
      setHorseRacesData({
        ...horseRacesContextData,
        data: {
          race_summaries: payload.data.race_summaries,
          next_to_go_ids: sortedNextToGoIds,
        },
        isLoading: false,
      })
    })
  }

  const setNextToGoRaces = useCallback(
    (updatedNextToGoRaces: Race[]) => {
      setHorseRacesData({
        ...horseRacesContextData,
        nextToGoRaces: updatedNextToGoRaces,
      })
    },
    [setHorseRacesData, horseRacesContextData],
  )

  const findNextRaces = useCallback(
    (numberOfRaces: number) => {
      const hasUpcomingRacesIds = upcomingRacesIds?.length > 0
      const allToGoIds = !hasUpcomingRacesIds
        ? dataNextToGoIds
        : upcomingRacesIds

      const nextToGoRacesIds = allToGoIds?.slice(
        0,
        nextToGoIds.length + numberOfRaces,
      )

      // Slices the first race when its advertised time is past 1 minute
      const filteredNextToGoRacesIds =
        nextToGoIds.length > 0
          ? nextToGoRacesIds?.slice(1, nextToGoRacesIds.length)
          : nextToGoRacesIds

      // Gets the removed race id to remove it from the list of upcoming races ids
      const removedRaceId = nextToGoRacesIds?.find(
        (nextToGoRaceId) => !filteredNextToGoRacesIds?.includes(nextToGoRaceId),
      )
      const updatedAllToGoIds = allToGoIds?.filter(
        (toGoId) => removedRaceId !== toGoId,
      )

      setUpcomingRacesIds(updatedAllToGoIds || [])
      setNextToGoIds(filteredNextToGoRacesIds || [])

      const nextRaces = filteredNextToGoRacesIds?.map(
        (nextToGoRaceId) => raceSummaries[nextToGoRaceId],
      )
      return nextRaces
    },
    [raceSummaries, nextToGoIds, upcomingRacesIds, dataNextToGoIds],
  )

  const updateNextRaces = useCallback(() => {
    const firstRaceAdvertisedTime = new Date(
      nextToGoRaces[0].advertised_start.seconds * 1000,
    )
    const nowTime = new Date()

    const timeToGoInMilliseconds =
      firstRaceAdvertisedTime.getTime() - nowTime.getTime()
    const timeToGoInSeconds = timeToGoInMilliseconds / 1000

    if (timeToGoInSeconds < -59) {
      // Finds next race when advertised time is past 1 minute
      const nextRacesFound = findNextRaces(1)
      setNextToGoRaces(nextRacesFound || [])
    } else {
      // Updates the races with fresh advertised time
      const updatedNextToGoRaces = JSON.parse(JSON.stringify(nextToGoRaces))
      setNextToGoRaces(updatedNextToGoRaces)
    }
  }, [findNextRaces, nextToGoRaces, setNextToGoRaces])

  const sortDataTimeAscending = (races_summary: { [key: string]: Race }) => {
    const sortedRacesSummary = Object.values(races_summary).sort(
      (raceA, raceB) =>
        raceA.advertised_start.seconds - raceB.advertised_start.seconds,
    )
    const sortedNextToGoIds = sortedRacesSummary.map(
      (raceSummary) => raceSummary.race_id,
    )
    return sortedNextToGoIds
  }

  const findFirstRaces = useCallback(() => {
    const nextRacesFound = findNextRaces(5)
    setNextToGoRaces(nextRacesFound || [])
  }, [findNextRaces, setNextToGoRaces])

  return {
    hasData,
    isLoading,
    nextToGoRaces,
    findFirstRaces,
    updateNextRaces,
    fetchHorseRaces,
  }
}

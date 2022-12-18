// Libraries
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'

// Components
import Categories from '../categories/categories'
import RaceList from '../race-list/race-list'
import Loader from '../loader/loader'
import Box from '../box/box'

// Constants
import { RACE_CATEGORIES } from '../categories/categories.constants'

// Contexts
import { useHorseRacesContext } from '../../contexts/horse-races.context'

// Styles
import styles from './horse-races.styles'

const HorseRaces = () => {
  const [categoriesIds, setCategoriesIds] = useState<string[]>([])

  const { hasData, isLoading, nextToGoRaces, updateNextRaces, findFirstRaces } =
    useHorseRacesContext()

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (nextToGoRaces.length > 0) {
        updateNextRaces()
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [nextToGoRaces, updateNextRaces])

  useEffect(() => {
    if (!isLoading && hasData) {
      findFirstRaces()
    }
  }, [isLoading, hasData])

  const handleCategoriesChange = (updatedCategoriesIds: string[]) =>
    setCategoriesIds(updatedCategoriesIds)

  const getFilteredRaces = useCallback(() => {
    return categoriesIds.length > 0
      ? nextToGoRaces.filter((nextToGoRace) =>
          categoriesIds.includes(nextToGoRace.category_id),
        )
      : nextToGoRaces
  }, [categoriesIds, nextToGoRaces])

  const filteredRaces = getFilteredRaces()

  return (
    <SafeAreaView>
      <Categories
        categories={RACE_CATEGORIES}
        onCategoriesChange={handleCategoriesChange}
      />
      {isLoading ? (
        <Box {...styles.loaderContainer}>
          <Loader testID="horse-races-loader" />
        </Box>
      ) : (
        <RaceList races={filteredRaces} />
      )}
    </SafeAreaView>
  )
}

export default HorseRaces

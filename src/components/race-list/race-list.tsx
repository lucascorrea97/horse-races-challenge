// Libraries
import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

// Components
import ListItem from '../list-item/list-item'
import Text from '../text/text'
import Box from '../box/box'

// Styles
import styles from './race-list.styles'

// Types
import { RaceListProps } from './race-list.types'
import { Race } from '../../types/races.types'

const RaceList = ({ races }: RaceListProps) => {
  const renderRace = useCallback(({ item }: { item: Race }) => {
    const nowDate = new Date()
    const raceTimeInSeconds = item.advertised_start.seconds

    const raceDate = new Date(raceTimeInSeconds * 1000)

    const timeToGoInMilliseconds = raceDate.getTime() - nowDate.getTime()
    const readableTimeToGo = `${(timeToGoInMilliseconds / 1000).toFixed(0)}s`
    const raceNumber = `R${item.race_number}`
    return (
      <ListItem
        body={item.venue_state}
        time={readableTimeToGo}
        title={item.meeting_name}
        itemNumber={raceNumber}
      />
    )
  }, [])

  const EmptyList = () => (
    <Box {...styles.emptyListContainer}>
      <Text {...styles.emptyListNoResultsText} variant="label200">
        We didn't find any races
      </Text>
    </Box>
  )

  return (
    <FlatList
      ListEmptyComponent={EmptyList}
      data={races}
      renderItem={renderRace}
    />
  )
}

export default RaceList

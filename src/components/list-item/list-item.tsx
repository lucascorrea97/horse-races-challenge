// Libraries
import React from 'react'

// Components
import Box from '../box/box'
import Text from '../text/text'

// Styles
import styles from './list-item.styles'

// Types
import { ListItemProps } from './list-item.types'

const ListItem = (props: ListItemProps) => {
  const { title, body, time, itemNumber } = props
  return (
    <Box {...styles.listItemContainer}>
      <Box>
        <Text variant="title100" {...styles.title}>
          {title}
        </Text>
        <Text variant="label200" {...styles.body}>
          {body}
        </Text>
      </Box>
      <Box {...styles.metaDataContainer}>
        <Text variant="labelStrong200" {...styles.time}>
          {time}
        </Text>
        <Box {...styles.numberCircle}>
          <Text variant="label200" {...styles.number}>
            {itemNumber}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default ListItem

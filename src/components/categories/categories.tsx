// Libraries
import React, { useState } from 'react'
import { Dimensions, FlatList } from 'react-native'

// Components
import Box from '../box/box'
import RadioPill from '../radio-pill/radio-pill'
import Text from '../text/text'

// Styles
import styles from './categories.styles'

// Types
import { Category } from './categories.types'

const { width } = Dimensions.get('window')
const horizontalMargin = 32
const marginBetweenPills = 8

interface CategoriesProps {
  onCategoriesChange: (categoryIds: string[]) => void
  categories: Category[]
}

const Categories = ({ categories, onCategoriesChange }: CategoriesProps) => {
  const [selectedCategoriesIds, setSelectedCategoriesIds] = useState<string[]>(
    [],
  )

  const categoryPillWidth =
    (width - horizontalMargin - marginBetweenPills) / categories.length

  const handleOnCategoryPress = (categoryId: string) => {
    const isCategorySelected =
      selectedCategoriesIds.length > 0 &&
      selectedCategoriesIds.includes(categoryId)

    const updatedCategoriesIds = isCategorySelected
      ? selectedCategoriesIds.filter(
          (selectedCategoriesId) => categoryId !== selectedCategoriesId,
        )
      : [...selectedCategoriesIds, categoryId]

    setSelectedCategoriesIds(updatedCategoriesIds)
    onCategoriesChange(updatedCategoriesIds)
  }

  const renderCategories = ({ item }: { item: Category }) => {
    const categoryId = item.categoryId
    const isCategorySelected = selectedCategoriesIds.includes(categoryId)
    return (
      <Box {...styles.radioPillWrapper} width={categoryPillWidth}>
        <RadioPill
          onPress={() => handleOnCategoryPress(categoryId)}
          displayName={item.displayName}
          isSelected={isCategorySelected}
        />
      </Box>
    )
  }
  return (
    <Box {...styles.container}>
      <Text variant="title200" {...styles.raceFilterText}>
        Race filter
      </Text>
      <FlatList
        keyExtractor={(item) => item.categoryId}
        horizontal
        data={categories}
        renderItem={renderCategories}
      />
    </Box>
  )
}

export default Categories

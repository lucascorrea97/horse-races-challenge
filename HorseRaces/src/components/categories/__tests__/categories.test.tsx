// Libraries
import React from 'react'

// Utils
import { fireEvent, render } from '../../../utils/testing-library'

// Components
import Categories from '../categories'

// Constants
import { RACE_CATEGORIES } from '../categories.constants'

const firstCategory = RACE_CATEGORIES[0]

describe('categories', () => {
  it('Triggers category selection successfully', () => {
    const mockOnCategoriesChange = jest.fn()
    const { getByText } = render(
      <Categories
        categories={RACE_CATEGORIES}
        onCategoriesChange={mockOnCategoriesChange}
      />,
    )

    const firstCategoryButton = getByText(firstCategory.displayName)
    fireEvent.press(firstCategoryButton)

    expect(mockOnCategoriesChange).toHaveBeenCalledTimes(1)
  })
})

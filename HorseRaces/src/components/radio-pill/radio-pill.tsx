// Libraries
import React from 'react'

// Components
import Button from '../button/button'

// Types
import { ButtonVariants } from '../button/button.types'
import { RadioPillProps } from './radio-pill.types'

const RadioPill = ({ displayName, isSelected, onPress }: RadioPillProps) => {
  const buttonVariant: ButtonVariants = isSelected ? 'primary' : 'outline'
  return (
    <Button onPress={onPress} variant={buttonVariant}>
      {displayName}
    </Button>
  )
}

export default RadioPill

// Libraries
import React, { Children } from 'react'
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native'

// Types
import { ButtonOwnProps } from './button.types'

// Styles
import styles, {
  getButtonVariantStyles,
  getButtonTextStyles,
} from './button.styles'

// Components
import Box from '../box/box'
import Text from '../text/text'

const Button = (props: ButtonOwnProps) => {
  const { children, variant, onPress } = props

  // styles
  const buttonStyles = getButtonVariantStyles(variant)
  const textStyles = getButtonTextStyles(variant)

  // Wraps strings into a Text component and uses the predefined styles according to its variant
  const arrayChildren = Children.toArray(children)
  const transformedChildren = Children.map(arrayChildren, (child) => {
    if (typeof child === 'string') {
      return (
        <Text variant="labelStrong200" {...textStyles}>
          {children}
        </Text>
      )
    }

    return child
  })

  const isAndroid = Platform.OS === 'android'
  const BaseComponent = isAndroid ? TouchableNativeFeedback : TouchableOpacity

  return (
    <Box
      type="Button"
      BaseComponent={BaseComponent}
      onPress={onPress}
      {...styles.base}
      {...buttonStyles}>
      <Box {...styles.childrenContainer}>{transformedChildren}</Box>
    </Box>
  )
}

export default Button

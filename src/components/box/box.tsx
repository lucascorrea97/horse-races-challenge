// Libraries
import React, { forwardRef, useMemo } from 'react'
import { View } from 'react-native'
import {
  createRestyleComponent,
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  layout,
  spacing,
  border,
  color,
  shadow,
  typography,
  textShadow,
  position,
  visible,
  spacingShorthand,
} from '@shopify/restyle'

// Types
import { BoxThemedProps } from './box.types'

// Theme
import { Theme } from '../../utils/theme'

const boxRestyleFunctions = [
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  visible,
  layout,
  spacing,
  spacingShorthand,
  border,
  shadow,
  position,
  color,
  opacity,
  visible,
  typography,
  spacing,
  spacingShorthand,
  textShadow,
]

const Box = forwardRef(
  (props: BoxThemedProps<Theme>, ref: React.Ref<Element>) => {
    const {
      BaseComponent = View,
      children,
      testID,
      ...passThroughProps
    } = props

    const Component = useMemo(
      () => createRestyleComponent(boxRestyleFunctions, BaseComponent),
      [BaseComponent],
    )
    return (
      <Component
        testID={testID}
        ref={ref}
        style={props.xStyle}
        {...passThroughProps}>
        {children}
      </Component>
    )
  },
)

Box.displayName = 'Box'

export default Box

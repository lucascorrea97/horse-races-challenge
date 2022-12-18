// Libraries
import React from 'react'
import {
  LayoutChangeEvent,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native'
import { BoxProps, TextProps, BaseTheme } from '@shopify/restyle'

// Utils
import { Theme as DefaultTheme } from '../../utils/theme'

export type BoxRestyleProps<Theme extends BaseTheme> = BoxProps<Theme> &
  TextProps<Theme>

// Todo see if can remove this
export interface TextBoxProps {
  BaseComponent?: React.ComponentType<Text>
  children?: React.ReactNode
  type?: 'Text'
  /**
   * @xStyle used to override button styles, should not be used unless extremely necessary.
   * If any of the button styles change, this can cause the layout to break
   */
  xStyle?: ViewStyle
  testID?: string
  onLayout?: (event: LayoutChangeEvent) => void
}

export interface ButtonBoxProps extends Omit<TouchableOpacityProps, 'style'> {
  BaseComponent?: React.ComponentType<TouchableOpacityProps>
  children?: React.ReactNode
  type?: 'Button'
  /**
   * @xStyle used to override button styles, should not be used unless extremely necessary.
   * If any of the button styles change, this can cause the layout to break
   */
  xStyle?: ViewStyle
  testID?: string
}

export type ComponentsBoxProps = ButtonBoxProps | TextBoxProps

/**
 * To be used by this library to type styled consts like:
 * const buttonStyles: BoxOwnProps = { margin: 'S' }
 */
export type BoxOwnProps = BoxRestyleProps<DefaultTheme> & ComponentsBoxProps

/**
 * To be used by consumers to type styled consts like:
 * const buttonStyles: BoxThemedProps<Theme> = { margin: 'S' }
 */
export type BoxThemedProps<Theme extends BaseTheme> = BoxRestyleProps<Theme> &
  ComponentsBoxProps

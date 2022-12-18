// Libraries
import { TouchableOpacityProps } from 'react-native'

export type ButtonVariants = 'primary' | 'outline'

export interface ButtonOwnProps extends TouchableOpacityProps {
  variant: ButtonVariants
}

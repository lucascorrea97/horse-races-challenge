// Types
import { BoxThemedProps } from '../components/box/box.types'

// DS
import { Theme } from './theme'

type ThemedStyles<T> = { [P in keyof T]: BoxThemedProps<Theme> }

export const createThemedStyles = <
  T extends ThemedStyles<T> | ThemedStyles<any>,
>(
  styles: T | ThemedStyles<T>,
) => styles

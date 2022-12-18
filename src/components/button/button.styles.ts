// Utils
import { createThemedStyles } from '../../utils/createThemedStyles'

// Types
import { BoxOwnProps } from '../box/box.types'
import { ButtonVariants } from './button.types'

const styles = createThemedStyles({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'XS',
    height: 48,
    paddingHorizontal: 'S',
  },
  primaryVariant: {
    backgroundColor: 'buttonPrimaryBackgroundColor',
    borderRadius: 'rounded',
  },
  primaryVariantText: {
    color: 'primaryButtonTextColor',
  },
  outlineVariant: {
    backgroundColor: 'buttonOutlineBackgroundColor',
    borderWidth: 1,
    borderRadius: 'rounded',
    borderColor: 'buttonOutlineBorderColor',
  },
  outlineVariantText: {
    color: 'outlineButtonTextColor',
  },
  childrenContainer: {
    width: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})

const buttonVariantStyles: Record<ButtonVariants, BoxOwnProps> = {
  primary: styles.primaryVariant,
  outline: styles.outlineVariant,
}

const buttonTextStyles: Record<ButtonVariants, BoxOwnProps> = {
  primary: styles.primaryVariantText,
  outline: styles.outlineVariantText,
}

export const getButtonVariantStyles = (variant: ButtonVariants) => {
  return buttonVariantStyles[variant]
}

export const getButtonTextStyles = (variant: ButtonVariants) => {
  return buttonTextStyles[variant]
}

export default styles

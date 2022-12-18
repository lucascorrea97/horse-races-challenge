// Libraries
import { createTheme } from '@shopify/restyle'

const palette = {
  transparent: 'transparent',
  eden: '#0D5257',
  alto: '#E0E0E0',
  white: '#fff',
  steel: '#EAEAF0',
  boulder: '#757575',
  wildSand: '#F5F5F5',
  nightRider: '#333333',
}

const commonTextProps = {
  fontWeight: '600',
  fontFamily: 'Helvetica Neue',
  fontSize: 14,
  lineHeight: 20,
}

const commonTitleProps = {
  fontFamily: 'Helvetica Neue',
  fontWeight: '800',
  letterSpacing: 0.4,
  color: 'titleColor',
}

const theme = createTheme({
  colors: {
    eden: palette.eden,
    // Button primary
    buttonPrimaryBackgroundColor: palette.eden,
    primaryButtonTextColor: palette.white,

    // Button outline
    buttonOutlineBorderColor: palette.eden,
    buttonOutlineBackgroundColor: palette.white,
    outlineButtonTextColor: palette.eden,

    // Categories
    categoriesBackgroundColor: palette.white,
    categoriesBorderColor: palette.alto,

    // General
    mainBackgroundColor: palette.white,

    // List item
    listItemTitleTextColor: palette.eden,
    listItemBodyTextColor: palette.boulder,
    listItemNumberColor: palette.nightRider,
    listItemTimeColor: palette.nightRider,
    listItemBorderColor: palette.alto,
    listItemNumberCircleColor: palette.boulder,

    // Typography
    titleColor: palette.eden,

    // EmptyResults
    noResultsFoundTextColor: palette.boulder,
  },
  borderRadii: {
    0: 0,
    XXS: 2,
    XS: 4,
    rounded: 100,
  },
  spacing: {
    0: 0,
    XXXS: 4,
    XXS: 8,
    XS: 12,
    S: 16,
    M: 24,
    L: 36,
    XL: 60,
    XXL: 88,
    auto: 'auto',
    '-XXXS': -4,
    '-XXS': -8,
    '-XS': -12,
    '-S': -16,
    '-M': -24,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    title200: {
      ...commonTitleProps,
      fontSize: 17,
      lineHeight: 24,
    },
    title100: {
      ...commonTitleProps,
      fontSize: 14,
      lineHeight: 20,
    },
    label200: {
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    labelStrong200: {
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 20,
    },
    primaryButtonText: {
      ...commonTextProps,
      color: 'primaryButtonTextColor',
    },
    outlineButtonText: {
      ...commonTextProps,
      color: 'outlineButtonTextColor',
    },
  },
})
export type Theme = typeof theme
export default theme

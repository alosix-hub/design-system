import {
  colors,
  colorsContrast,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@alosix-hub-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
    boxShadow: colors,
  },
  media: {
    $xs: '@media (min-width: 480px)',
    $sm: '@media (min-width: 640px)',
    $md: '@media (min-width: 1024px)',
    $lg: '@media (min-width: 1280px)',
  },
})

export const darkTheme = createTheme('dark', {
  colors: colorsContrast,
  space: {},
  fonts: {},
})

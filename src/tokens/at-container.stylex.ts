export { atContainer }

const atContainer = defineConsts({
  '3xs': '@container (width >= 16rem)',
  '2xs': '@container (width >= 18rem)',
  xs: '@container (width >= 20rem)',
  sm: '@container (width >= 24rem)',
  md: '@container (width >= 28rem)',
  lg: '@container (width >= 32rem)',
  xl: '@container (width >= 36rem)',
  '2xl': '@container (width >= 42rem)',
  '3xl': '@container (width >= 48rem)',
  '4xl': '@container (width >= 56rem)',
  '5xl': '@container (width >= 64rem)',
  '6xl': '@container (width >= 72rem)',
  '7xl': '@container (width >= 80rem)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

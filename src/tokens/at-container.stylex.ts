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

  'max-3xs': '@container (width < 16rem)',
  'max-2xs': '@container (width < 18rem)',
  'max-xs': '@container (width < 20rem)',
  'max-sm': '@container (width < 24rem)',
  'max-md': '@container (width < 28rem)',
  'max-lg': '@container (width < 32rem)',
  'max-xl': '@container (width < 36rem)',
  'max-2xl': '@container (width < 42rem)',
  'max-3xl': '@container (width < 48rem)',
  'max-4xl': '@container (width < 56rem)',
  'max-5xl': '@container (width < 64rem)',
  'max-6xl': '@container (width < 72rem)',
  'max-7xl': '@container (width < 80rem)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

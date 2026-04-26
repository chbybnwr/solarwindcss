export { atMedia }

const atMedia = defineConsts({
  sm: '@media (width >= 40rem)',
  md: '@media (width >= 48rem)',
  lg: '@media (width >= 64rem)',
  xl: '@media (width >= 80rem)',
  '2xl': '@media (width >= 96rem)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

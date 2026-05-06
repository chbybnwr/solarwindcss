export { atMedia }

const atMedia = defineConsts({
  /**
   * ~640px
   */
  sm: '@media (width >= 40rem)',

  /**
   * ~768px
   */
  md: '@media (width >= 48rem)',

  /**
   * ~1024px
   */
  lg: '@media (width >= 64rem)',

  /**
   * ~1280px
   */
  xl: '@media (width >= 80rem)',

  /**
   * ~1536px
   */
  '2xl': '@media (width >= 96rem)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

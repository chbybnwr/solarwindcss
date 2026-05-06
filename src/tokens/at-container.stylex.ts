export { atContainer }

const atContainer = defineConsts({
  /**
   * ~256px
   */
  '3xs': '@container (width >= 16rem)',

  /**
   * ~288px
   */
  '2xs': '@container (width >= 18rem)',

  /**
   * ~320px
   */
  xs: '@container (width >= 20rem)',

  /**
   * ~384px
   */
  sm: '@container (width >= 24rem)',

  /**
   * ~448px
   */
  md: '@container (width >= 28rem)',

  /**
   * ~512px
   */
  lg: '@container (width >= 32rem)',

  /**
   * ~576px
   */
  xl: '@container (width >= 36rem)',

  /**
   * ~672px
   */
  '2xl': '@container (width >= 42rem)',

  /**
   * ~768px
   */
  '3xl': '@container (width >= 48rem)',

  /**
   * ~896px
   */
  '4xl': '@container (width >= 56rem)',

  /**
   * ~1024px
   */
  '5xl': '@container (width >= 64rem)',

  /**
   * ~1152px
   */
  '6xl': '@container (width >= 72rem)',

  /**
   * ~1280px
   */
  '7xl': '@container (width >= 80rem)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

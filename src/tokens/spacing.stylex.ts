export { spacing }

const unit = '0.25rem'

const spacing = defineConsts({
  /**
   * 0rem / ~0px
   */
  0: `calc(${unit} * 0)`,

  /**
   * 0.125rem / ~2px
   */
  0.5: `calc(${unit} * 0.5)`,

  /**
   * 0.25rem / ~4px
   */
  1: `calc(${unit} * 1)`,

  /**
   * 0.375rem / ~6px
   */
  1.5: `calc(${unit} * 1.5)`,

  /**
   * 0.5rem / ~8px
   */
  2: `calc(${unit} * 2)`,

  /**
   * 0.625rem / ~10px
   */
  2.5: `calc(${unit} * 2.5)`,

  /**
   * 0.75rem / ~12px
   */
  3: `calc(${unit} * 3)`,

  /**
   * 0.875rem / ~14px
   */
  3.5: `calc(${unit} * 3.5)`,

  /**
   * 1rem / ~16px
   */
  4: `calc(${unit} * 4)`,

  /**
   * 1.25rem / ~20px
   */
  5: `calc(${unit} * 5)`,

  /**
   * 1.5rem / ~24px
   */
  6: `calc(${unit} * 6)`,

  /**
   * 1.75rem / ~28px
   */
  7: `calc(${unit} * 7)`,

  /**
   * 2rem / ~32px
   */
  8: `calc(${unit} * 8)`,

  /**
   * 2.25rem / ~36px
   */
  9: `calc(${unit} * 9)`,

  /**
   * 2.5rem / ~40px
   */
  10: `calc(${unit} * 10)`,

  /**
   * 2.75rem / ~44px
   */
  11: `calc(${unit} * 11)`,

  /**
   * 3rem / ~48px
   */
  12: `calc(${unit} * 12)`,

  /**
   * 3.5rem / ~56px
   */
  14: `calc(${unit} * 14)`,

  /**
   * 4rem / ~64px
   */
  16: `calc(${unit} * 16)`,

  /**
   * 5rem / ~80px
   */
  20: `calc(${unit} * 20)`,

  /**
   * 6rem / ~96px
   */
  24: `calc(${unit} * 24)`,

  /**
   * 7rem / ~112px
   */
  28: `calc(${unit} * 28)`,

  /**
   * 8rem / ~128px
   */
  32: `calc(${unit} * 32)`,

  /**
   * 9rem / ~144px
   */
  36: `calc(${unit} * 36)`,

  /**
   * 10rem / ~160px
   */
  40: `calc(${unit} * 40)`,

  /**
   * 11rem / ~176px
   */
  44: `calc(${unit} * 44)`,

  /**
   * 12rem / ~192px
   */
  48: `calc(${unit} * 48)`,

  /**
   * 13rem / ~208px
   */
  52: `calc(${unit} * 52)`,

  /**
   * 14rem / ~224px
   */
  56: `calc(${unit} * 56)`,

  /**
   * 15rem / ~240px
   */
  60: `calc(${unit} * 60)`,

  /**
   * 16rem / ~256px
   */
  64: `calc(${unit} * 64)`,

  /**
   * 18rem / ~288px
   */
  72: `calc(${unit} * 72)`,

  /**
   * 20rem / ~320px
   */
  80: `calc(${unit} * 80)`,

  /**
   * 24rem / ~384px
   */
  96: `calc(${unit} * 96)`,
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

export { atMedia }

const rpx = '* 0.625rem'

const atMedia = defineConsts({
  /** sm */
  'width >= 640rpx': `@media (width >= 640 ${rpx})`,
  /** md */
  'width >= 768rpx': `@media (width >= 768 ${rpx})`,
  /** lg */
  'width >= 1024rpx': `@media (width >= 1024 ${rpx})`,
  /** xl */
  'width >= 1280rpx': `@media (width >= 1280 ${rpx})`,
  /** 2xl */
  'width >= 1536rpx': `@media (width >= 1536 ${rpx})`,

  'prefers-color-scheme: dark': '@media (prefers-color-scheme: dark)',
  'prefers-color-scheme: light': '@media (prefers-color-scheme: light)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

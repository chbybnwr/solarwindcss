export { atContainer }

const rpx = '* 0.625rem'

const atContainer = defineConsts({
  /** 3xs */
  'width >= 256rpx': `@container (width >= calc(256 ${rpx}))`,
  /** 2xs */
  'width >= 288rpx': `@container (width >= calc(288 ${rpx}))`,
  /** xs */
  'width >= 320rpx': `@container (width >= calc(320 ${rpx}))`,
  /** sm */
  'width >= 384rpx': `@container (width >= calc(384 ${rpx}))`,
  /** md */
  'width >= 448rpx': `@container (width >= calc(448 ${rpx}))`,
  /** lg */
  'width >= 512rpx': `@container (width >= calc(512 ${rpx}))`,
  /** xl */
  'width >= 576rpx': `@container (width >= calc(576 ${rpx}))`,
  /** 2xl */
  'width >= 672rpx': `@container (width >= calc(672 ${rpx}))`,
  /** 3xl */
  'width >= 768rpx': `@container (width >= calc(768 ${rpx}))`,
  /** 4xl */
  'width >= 896rpx': `@container (width >= calc(896 ${rpx}))`,
  /** 5xl */
  'width >= 1024rpx': `@container (width >= calc(1024 ${rpx}))`,
  /** 6xl */
  'width >= 1152rpx': `@container (width >= calc(1152 ${rpx}))`,
  /** 7xl */
  'width >= 1280rpx': `@container (width >= calc(1280 ${rpx}))`,
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

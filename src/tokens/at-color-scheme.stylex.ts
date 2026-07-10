export { atColorScheme }

const atColorScheme = defineConsts({
  dark: '@media (prefers-color-scheme: dark)',
  light: '@media (prefers-color-scheme: light)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

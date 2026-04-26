export { fontWeight }

const fontWeight = defineConsts({
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

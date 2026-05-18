export { textSize }

import { create } from '@stylexjs/stylex'
import { fontSize } from '../tokens/font-size.stylex.ts'

const textSize = create({
  xs: {
    fontSize: fontSize.xs,
    lineHeight: 'calc(1 / 0.75)',
  },
  sm: {
    fontSize: fontSize.sm,
    lineHeight: 'calc(1.25 / 0.875)',
  },
  base: {
    fontSize: fontSize.base,
    lineHeight: 'calc(1.5 / 1)',
  },
  lg: {
    fontSize: fontSize.lg,
    lineHeight: 'calc(1.75 / 1.125)',
  },
  xl: {
    fontSize: fontSize.xl,
    lineHeight: 'calc(1.75 / 1.25)',
  },
  '2xl': {
    fontSize: fontSize['2xl'],
    lineHeight: 'calc(2 / 1.5)',
  },
  '3xl': {
    fontSize: fontSize['3xl'],
    lineHeight: 'calc(2.25 / 1.875)',
  },
  '4xl': {
    fontSize: fontSize['4xl'],
    lineHeight: 'calc(2.5 / 2.25)',
  },
  '5xl': {
    fontSize: fontSize['5xl'],
    lineHeight: 1,
  },
  '6xl': {
    fontSize: fontSize['6xl'],
    lineHeight: 1,
  },
  '7xl': {
    fontSize: fontSize['7xl'],
    lineHeight: 1,
  },
  '8xl': {
    fontSize: fontSize['8xl'],
    lineHeight: 1,
  },
  '9xl': {
    fontSize: fontSize['9xl'],
    lineHeight: 1,
  },
})

//

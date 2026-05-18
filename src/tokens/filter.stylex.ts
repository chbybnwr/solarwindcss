export { filter }

const dropShadowColor = {
  xs: 'rgb(0 0 0 / 0.05)',
  sm: 'rgb(0 0 0 / 0.15)',
  md: 'rgb(0 0 0 / 0.12)',
  lg: 'rgb(0 0 0 / 0.15)',
  xl: 'rgb(0 0 0 / 0.1)',
  '2xl': 'rgb(0 0 0 / 0.15)',
} as const

const filter = defineConsts({
  'drop-shadow-xs': `drop-shadow(0 1px 1px var(--sw-drop-shadow-color, ${dropShadowColor.xs}))`,
  'drop-shadow-sm': `drop-shadow(0 1px 2px var(--sw-drop-shadow-color, ${dropShadowColor.sm}))`,
  'drop-shadow-md': `drop-shadow(0 3px 3px var(--sw-drop-shadow-color, ${dropShadowColor.md}))`,
  'drop-shadow-lg': `drop-shadow(0 4px 4px var(--sw-drop-shadow-color, ${dropShadowColor.lg}))`,
  'drop-shadow-xl': `drop-shadow(0 9px 7px var(--sw-drop-shadow-color, ${dropShadowColor.xl}))`,
  'drop-shadow-2xl': `drop-shadow(0 25px 25px var(--sw-drop-shadow-color, ${dropShadowColor['2xl']}))`,
  'blur-xs': 'blur(4px)',
  'blur-sm': 'blur(8px)',
  'blur-md': 'blur(12px)',
  'blur-lg': 'blur(16px)',
  'blur-xl': 'blur(24px)',
  'blur-2xl': 'blur(40px)',
  'blur-3xl': 'blur(64px)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

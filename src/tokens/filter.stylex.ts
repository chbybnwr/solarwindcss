export { blur }
export { dropShadow }
export { dropShadowColor }

const dropShadowColor = defineVars({
  xs: 'rgb(0 0 0 / 0.05)',
  sm: 'rgb(0 0 0 / 0.15)',
  md: 'rgb(0 0 0 / 0.12)',
  lg: 'rgb(0 0 0 / 0.15)',
  xl: 'rgb(0 0 0 / 0.1)',
  '2xl': 'rgb(0 0 0 / 0.15)',
})

const dropShadow = defineConsts({
  xs: `drop-shadow(0 1px 1px var(--sw-drop-shadow-color, ${dropShadowColor.xs}))`,
  sm: `drop-shadow(0 1px 2px var(--sw-drop-shadow-color, ${dropShadowColor.sm}))`,
  md: `drop-shadow(0 3px 3px var(--sw-drop-shadow-color, ${dropShadowColor.md}))`,
  lg: `drop-shadow(0 4px 4px var(--sw-drop-shadow-color, ${dropShadowColor.lg}))`,
  xl: `drop-shadow(0 9px 7px var(--sw-drop-shadow-color, ${dropShadowColor.xl}))`,
  '2xl': `drop-shadow(0 25px 25px var(--sw-drop-shadow-color, ${dropShadowColor['2xl']}))`,
} as const)

//

const blur = defineConsts({
  xs: 'blur(4px)',
  sm: 'blur(8px)',
  md: 'blur(12px)',
  lg: 'blur(16px)',
  xl: 'blur(24px)',
  '2xl': 'blur(40px)',
  '3xl': 'blur(64px)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

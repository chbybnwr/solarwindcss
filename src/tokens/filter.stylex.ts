export { blur }
export { dropShadow }
export { dropShadowColor }

const dropShadowColor = defineVars({
  xs: types.color('rgb(0 0 0 / 0.05)') satisfies Types.Color<string>,
  sm: types.color('rgb(0 0 0 / 0.15)') satisfies Types.Color<string>,
  md: types.color('rgb(0 0 0 / 0.12)') satisfies Types.Color<string>,
  lg: types.color('rgb(0 0 0 / 0.15)') satisfies Types.Color<string>,
  xl: types.color('rgb(0 0 0 / 0.1)') satisfies Types.Color<string>,
  '2xl': types.color('rgb(0 0 0 / 0.15)') satisfies Types.Color<string>,
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
import { types } from '@stylexjs/stylex'
import type { Types } from '@stylexjs/stylex'
//

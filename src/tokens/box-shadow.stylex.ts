export { boxShadow }
export { boxShadowVar }

const color = '--box-shadow-color'
const insetColor = '--inset-box-shadow-color'
const ringWidth = '--ring-box-shadow-width'
const ringColor = '--ring-box-shadow-color'
const ringPosition = '--ring-box-shadow-position'
const insetRingWidth = '--inset-ring-box-shadow-width'
const insetRingColor = '--inset-ring-box-shadow-color'

const boxShadowVar = defineVars({
  [color]: null,
  [insetColor]: null,
  [ringWidth]: null,
  [ringColor]: null,
  [ringPosition]: null,
  [insetRingWidth]: null,
  [insetRingColor]: null,
})

const boxShadow = defineConsts({
  '2xs': `0 1px var(${color}, rgb(0 0 0 / 0.05))`,
  xs: `0 1px 2px 0 var(${color}, rgb(0 0 0 / 0.05))`,
  sm: `0 1px 3px 0 var(${color}, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(${color}, rgb(0 0 0 / 0.1))`,
  md: `0 4px 6px -1px var(${color}, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(${color}, rgb(0 0 0 / 0.1))`,
  lg: `0 10px 15px -3px var(${color}, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(${color}, rgb(0 0 0 / 0.1))`,
  xl: `0 20px 25px -5px var(${color}, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(${color}, rgb(0 0 0 / 0.1))`,
  '2xl': `0 25px 50px -12px var(${color}, rgb(0 0 0 / 0.25))`,

  'inset-2xs': `inset 0 1px var(${insetColor}, rgb(0 0 0 / 0.05))`,
  'inset-xs': `inset 0 1px 1px var(${insetColor}, rgb(0 0 0 / 0.05))`,
  'inset-sm': `inset 0 2px 4px var(${insetColor}, rgb(0 0 0 / 0.05))`,

  ring: `var(${ringPosition}, ) 0 0 0 var(${ringWidth}, 1px) var(${ringColor}, currentcolor)`,

  'inset-ring': `inset 0 0 0 var(${insetRingWidth}, 1px) var(${insetRingColor}, currentcolor)`,
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

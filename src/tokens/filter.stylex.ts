export { filter }
export { filterVar }

const color = '--drop-shadow-color'

const filterVar = defineVars({
  [color]: null,
})

const filter = defineConsts({
  'drop-shadow-xs': `drop-shadow(0 1px 1px var(${color}, rgb(0 0 0 / 0.05)))`,
  'drop-shadow-sm': `drop-shadow(0 1px 2px var(${color}, rgb(0 0 0 / 0.15)))`,
  'drop-shadow-md': `drop-shadow(0 3px 3px var(${color}, rgb(0 0 0 / 0.12)))`,
  'drop-shadow-lg': `drop-shadow(0 4px 4px var(${color}, rgb(0 0 0 / 0.15)))`,
  'drop-shadow-xl': `drop-shadow(0 9px 7px var(${color}, rgb(0 0 0 / 0.1)))`,
  'drop-shadow-2xl': `drop-shadow(0 25px 25px var(${color}, rgb(0 0 0 / 0.15)))`,
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

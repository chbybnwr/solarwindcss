export { textShadow }
export { textShadowVar }

const color = '--text-shadow-color'

const textShadowVar = defineVars({
  [color]: null,
})

const textShadow = defineConsts({
  '2xs': `0px 1px 0px var(${color}, rgb(0 0 0 / 0.15))`,
  xs: `0px 1px 1px var(${color}, rgb(0 0 0 / 0.2))`,
  sm: `0px 1px 0px var(${color}, rgb(0 0 0 / 0.075)), 0px 1px 1px var(${color}, rgb(0 0 0 / 0.075)), 0px 2px 2px var(${color}, rgb(0 0 0 / 0.075))`,
  md: `0px 1px 1px var(${color}, rgb(0 0 0 / 0.1)), 0px 1px 2px var(${color}, rgb(0 0 0 / 0.1)), 0px 2px 4px var(${color}, rgb(0 0 0 / 0.1))`,
  lg: `0px 1px 2px var(${color}, rgb(0 0 0 / 0.1)), 0px 3px 2px var(${color}, rgb(0 0 0 / 0.1)), 0px 4px 8px var(${color}, rgb(0 0 0 / 0.1))`,
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

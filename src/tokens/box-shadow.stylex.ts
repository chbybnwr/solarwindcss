export { boxShadow }
export { boxShadowVars }

const boxShadowVars = defineVars({
  '--sd-box-shadow-color': null,
  '--sd-inset-box-shadow-color': null,
  '--sd-ring-box-shadow-width': null,
  '--sd-ring-box-shadow-color': null,
  '--sd-inset-ring-box-shadow-width': null,
  '--sd-inset-ring-box-shadow-color': null,
})

const boxShadow = defineConsts({
  '2xs': '0 1px var(--sd-box-shadow-color, rgb(0 0 0 / 0.05))',
  xs: '0 1px 2px 0 var(--sd-box-shadow-color, rgb(0 0 0 / 0.05))',
  sm: '0 1px 3px 0 var(--sd-box-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1))',
  md: '0 4px 6px -1px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1))',
  lg: '0 10px 15px -3px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1))',
  xl: '0 20px 25px -5px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--sd-box-shadow-color, rgb(0 0 0 / 0.1))',
  '2xl': '0 25px 50px -12px var(--sd-box-shadow-color, rgb(0 0 0 / 0.25))',

  'inset-2xs':
    'inset 0 1px var(--sd-inset-box-shadow-color, rgb(0 0 0 / 0.05))',
  'inset-xs':
    'inset 0 1px 1px var(--sd-inset-box-shadow-color, rgb(0 0 0 / 0.05))',
  'inset-sm':
    'inset 0 2px 4px var(--sd-inset-box-shadow-color, rgb(0 0 0 / 0.05))',

  ring: '0 0 0 var(--sd-ring-box-shadow-width, 1px) var(--sd-ring-box-shadow-color, currentcolor)',

  'inset-ring':
    'inset 0 0 0 var(--sd-inset-ring-box-shadow-width, 1px) var(--sd-inset-ring-box-shadow-color, currentcolor)',
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

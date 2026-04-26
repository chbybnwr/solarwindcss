export { boxShadow }
export { boxShadowColor }
export { insetBoxShadow }

const boxShadowColor = defineVars({
  '2xs': 'rgb(0 0 0 / 0.05)',
  xs: 'rgb(0 0 0 / 0.05)',
  sm: 'rgb(0 0 0 / 0.1)',
  md: 'rgb(0 0 0 / 0.1)',
  lg: 'rgb(0 0 0 / 0.1)',
  xl: 'rgb(0 0 0 / 0.1)',
  '2xl': 'rgb(0 0 0 / 0.25)',
})

const boxShadow = defineConsts({
  '2xs': `0 1px var(--sw-box-shadow-color, ${boxShadowColor['2xs']})`,
  xs: `0 1px 2px 0 var(--sw-box-shadow-color, ${boxShadowColor.xs})`,
  sm: `
    0 1px 3px 0 var(--sw-box-shadow-color, ${boxShadowColor.sm}),
    0 1px 2px -1px var(--sw-box-shadow-color, ${boxShadowColor.sm})
  `,
  md: `
    0 4px 6px -1px var(--sw-box-shadow-color, ${boxShadowColor.md}),
    0 2px 4px -2px var(--sw-box-shadow-color, ${boxShadowColor.md})
  `,
  lg: `
    0 10px 15px -3px var(--sw-box-shadow-color, ${boxShadowColor.lg}),
    0 4px 6px -4px var(--sw-box-shadow-color, ${boxShadowColor.lg})
  `,
  xl: `
    0 20px 25px -5px var(--sw-box-shadow-color, ${boxShadowColor.xl}),
    0 8px 10px -6px var(--sw-box-shadow-color, ${boxShadowColor.xl})
  `,
  '2xl': `0 25px 50px -12px var(--sw-box-shadow-color, ${boxShadowColor['2xl']})`,
} as const)

const insetBoxShadowColor = 'rgb(0 0 0 / 0.05)'

const insetBoxShadow = defineConsts({
  '2xs': `inset 0 1px var(--sw-inset-shadow-color, ${insetBoxShadowColor})`,
  xs: `inset 0 1px 1px var(--sw-inset-shadow-color, ${insetBoxShadowColor})`,
  sm: `inset 0 2px 4px var(--sw-inset-shadow-color, ${insetBoxShadowColor})`,
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

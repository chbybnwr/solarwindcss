export { textShadow }
export { textShadowColor }

const textShadowColor = defineVars({
  '2xs': 'rgb(0 0 0 / 0.15)',
  xs: 'rgb(0 0 0 / 0.2)',
  sm: 'rgb(0 0 0 / 0.075)',
  md: 'rgb(0 0 0 / 0.1)',
  lg: 'rgb(0 0 0 / 0.1)',
})

const textShadow = defineConsts({
  '2xs': `0px 1px 0px var(--sw-text-shadow-color, ${textShadowColor['2xs']})`,
  xs: `0px 1px 1px var(--sw-text-shadow-color, ${textShadowColor.xs})`,
  sm: `
    0px 1px 0px var(--sw-text-shadow-color, ${textShadowColor.sm}),
    0px 1px 1px var(--sw-text-shadow-color, ${textShadowColor.sm}),
    0px 2px 2px var(--sw-text-shadow-color, ${textShadowColor.sm})
  `,
  md: `
    0px 1px 1px var(--sw-text-shadow-color, ${textShadowColor.md}),
    0px 1px 2px var(--sw-text-shadow-color, ${textShadowColor.md}),
    0px 2px 4px var(--sw-text-shadow-color, ${textShadowColor.md})
  `,
  lg: `
    0px 1px 2px var(--sw-text-shadow-color, ${textShadowColor.lg}),
    0px 3px 2px var(--sw-text-shadow-color, ${textShadowColor.lg}),
    0px 4px 8px var(--sw-text-shadow-color, ${textShadowColor.lg})
  `,
} as const)

import { defineConsts } from '@stylexjs/stylex'
import { defineVars } from '@stylexjs/stylex'
//

export { theme }

const theme = defineVars({
  '--sw-text-shadow-color': types.color(
    'transparent',
  ) satisfies Types.Color<string>,
  '--sw-box-shadow-color': types.color(
    'transparent',
  ) satisfies Types.Color<string>,
  '--sw-inset-box-shadow-color': types.color(
    'transparent',
  ) satisfies Types.Color<string>,
  '--sw-drop-shadow-color': types.color(
    'transparent',
  ) satisfies Types.Color<string>,
})

import { defineVars } from '@stylexjs/stylex'
import { types } from '@stylexjs/stylex'
import type { Types } from '@stylexjs/stylex'
//

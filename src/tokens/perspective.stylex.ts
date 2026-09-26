export { perspective }

const perspective = defineConsts({
  dramatic: '100px',
  near: '300px',
  normal: '500px',
  midrange: '800px',
  distant: '1200px',
} as const)

import { defineConsts } from '@stylexjs/stylex'
//

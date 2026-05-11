export { textSize }

import { create } from '@stylexjs/stylex'

const textSize = create({
  xs: { fontSize: '0.75rem', lineHeight: 'calc(1 / 0.75)' },
  sm: { fontSize: '0.875rem', lineHeight: 'calc(1.25 / 0.875)' },
  base: { fontSize: '1rem', lineHeight: 'calc(1.5 / 1)' },
  lg: { fontSize: '1.125rem', lineHeight: 'calc(1.75 / 1.125)' },
  xl: { fontSize: '1.25rem', lineHeight: 'calc(1.75 / 1.25)' },
  '2xl': { fontSize: '1.5rem', lineHeight: 'calc(2 / 1.5)' },
  '3xl': { fontSize: '1.875rem', lineHeight: 'calc(2.25 / 1.875)' },
  '4xl': { fontSize: '2.25rem', lineHeight: 'calc(2.5 / 2.25)' },
  '5xl': { fontSize: '3rem', lineHeight: 1 },
  '6xl': { fontSize: '3.75rem', lineHeight: 1 },
  '7xl': { fontSize: '4.5rem', lineHeight: 1 },
  '8xl': { fontSize: '6rem', lineHeight: 1 },
  '9xl': { fontSize: '8rem', lineHeight: 1 },
})

//

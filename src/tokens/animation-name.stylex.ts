export { animationName }

const animationName = defineVars({
  spin: keyframes({
    to: {
      transform: 'rotate(360deg)',
    },
  }),
  ping: keyframes({
    '75%': {},
    '100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  }),
  pulse: keyframes({
    '50%': {
      opacity: 0.5,
    },
  }),
  bounce: keyframes({
    '0%': {},
    '100%': {
      transform: 'translateY(-25%)',
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
    },
    '50%': {
      transform: 'none',
      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  }),
})

import { defineVars } from '@stylexjs/stylex'
import { keyframes } from '@stylexjs/stylex'
//

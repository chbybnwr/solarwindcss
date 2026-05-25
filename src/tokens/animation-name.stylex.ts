export { animationName }

import { defineVars } from '@stylexjs/stylex'
import { keyframes } from '@stylexjs/stylex'

const animationName = defineVars({
  spin: keyframes({
    to: {
      transform: 'rotate(360deg)',
    },
  }),
  ping: keyframes({
    '75%': {
      opacity: 0,
      transform: 'scale(2)',
    },
    '100%': {
      opacity: 0,
      transform: 'scale(2)',
    },
  }),
  pulse: keyframes({
    '50%': {
      opacity: 0.5,
    },
  }),
  bounce: keyframes({
    '0%': {
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
      transform: 'translateY(-25%)',
    },
    '100%': {
      animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
      transform: 'translateY(-25%)',
    },
    '50%': {
      animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      transform: 'none',
    },
  }),
})

//

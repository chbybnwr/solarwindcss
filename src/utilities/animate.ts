export { spin }
export { ping }
export { pulse }
export { bounce }

import { animationName } from '../tokens/animation-name.stylex'
import { create } from '@stylexjs/stylex'

const { spin, ping, pulse, bounce } = create({
  spin: {
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationName: animationName.spin,
    animationTimingFunction: 'linear',
  },
  ping: {
    animationDuration: '1s',
    animationIterationCount: 'infinite',
    animationName: animationName.ping,
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  pulse: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: animationName.pulse,
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  bounce: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: animationName.bounce,
  },
})

//

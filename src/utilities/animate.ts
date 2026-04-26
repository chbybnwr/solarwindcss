export { spin }
export { ping }
export { pulse }
export { bounce }

const { spin, ping, pulse, bounce } = create({
  spin: {
    animationName: animationName.spin,
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  ping: {
    animationName: animationName.ping,
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    animationIterationCount: 'infinite',
  },
  pulse: {
    animationName: animationName.pulse,
    animationDuration: '2s',
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
    animationIterationCount: 'infinite',
  },
  bounce: {
    animationName: animationName.bounce,
    animationDuration: '2s',
    animationIterationCount: 'infinite',
  },
})

import { animationName } from '../tokens/animation-name.stylex'
import { create } from '@stylexjs/stylex'
//

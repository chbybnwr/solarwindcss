export { transition }

const transitionDuration = '150ms'

const transition = create({
  base: {
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
    transitionDuration,
  },
  all: {
    transitionProperty: 'all',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
    transitionDuration,
  },
  colors: {
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
    transitionDuration,
  },
  opacity: {
    transitionProperty: 'opacity',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
    transitionDuration,
  },
  shadow: {
    transitionProperty: 'box-shadow',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
    transitionDuration,
  },
  transform: {
    transitionProperty: 'transform, translate, scale, rotate',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
    transitionDuration,
  },
})

import { create } from '@stylexjs/stylex'
import { transitionTimingFunction } from '../tokens/transition-timing-function.stylex'
//

export { transition }

import { create } from '@stylexjs/stylex'
import { transitionTimingFunction } from '../tokens/transition-timing-function.stylex'

const transitionDuration = '150ms'

const transition = create({
  /**
   * Enables transitions for properties that do not affect layout.
   */
  default: {
    transitionDuration,
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
  },
  all: {
    transitionDuration,
    transitionProperty: 'all',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
  },
  color: {
    transitionDuration,
    transitionProperty:
      'color, background-color, border-color, outline-color, text-decoration-color, fill, stroke',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
  },
  opacity: {
    transitionDuration,
    transitionProperty: 'opacity',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
  },
  boxShadow: {
    transitionDuration,
    transitionProperty: 'box-shadow',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
  },
  transform: {
    transitionDuration,
    transitionProperty: 'transform, translate, scale, rotate',
    transitionTimingFunction: transitionTimingFunction.easeInOut,
  },
})

//

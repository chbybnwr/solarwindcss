export { lineClamped }
export { notLineClamped }

import { create } from '@stylexjs/stylex'

const { lineClamped, notLineClamped } = create({
  /**
   * Example:
   * ```tsx
   * <div
   *   styleDeck={[
   *     [lineClamped, { WebkitLineClamp: 3 }],
   *     { color: 'red' }
   *   ]}
   * />
   * ```
   */
  lineClamped: {
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
  },

  notLineClamped: {
    overflow: 'visible',
    WebkitBoxOrient: 'horizontal',
    WebkitLineClamp: 'unset',
    display: 'block',
  },
})

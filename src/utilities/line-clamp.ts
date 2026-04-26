export { lineClamp }

const base = {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
}

const lineClamp = create({
  base: { ...base, WebkitLineClamp: null },
  1: { ...base, WebkitLineClamp: 1 },
  2: { ...base, WebkitLineClamp: 2 },
  3: { ...base, WebkitLineClamp: 3 },
  4: { ...base, WebkitLineClamp: 4 },
  5: { ...base, WebkitLineClamp: 5 },
  6: { ...base, WebkitLineClamp: 6 },
  none: {
    overflow: 'visible',
    display: 'block',
    WebkitBoxOrient: 'horizontal',
    WebkitLineClamp: 'unset',
  },
})

import { create } from '@stylexjs/stylex'
//

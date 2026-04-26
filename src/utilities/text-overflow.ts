export { truncate }

const { truncate } = create({
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})

import { create } from '@stylexjs/stylex'

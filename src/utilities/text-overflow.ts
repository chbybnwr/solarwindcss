export { truncate }

import { create } from '@stylexjs/stylex'

const { truncate } = create({
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
})

//

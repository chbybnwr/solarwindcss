export { screenReaderOnly }
export { notScreenReaderOnly }

import { create } from '@stylexjs/stylex'

const { screenReaderOnly, notScreenReaderOnly } = create({
  screenReaderOnly: {
    margin: '-1px',
    padding: 0,
    borderWidth: 0,
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    display: 'none',
    position: 'absolute',
    whiteSpace: 'nowrap',
    height: '1px',
    width: '1px',
  },
  notScreenReaderOnly: {
    margin: 0,
    padding: 0,
    overflow: 'visible',
    clipPath: 'none',
    position: 'static',
    whiteSpace: 'normal',
    height: 'auto',
    width: 'auto',
  },
})

//

export { screenReaderOnly }
export { notScreenReaderOnly }

const { screenReaderOnly, notScreenReaderOnly } = create({
  screenReaderOnly: {
    display: 'none',
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clipPath: 'inset(50%)',
    whiteSpace: 'nowrap',
    borderWidth: 0,
  },
  notScreenReaderOnly: {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: 0,
    margin: 0,
    overflow: 'visible',
    clipPath: 'none',
    whiteSpace: 'normal',
  },
})

import { create } from '@stylexjs/stylex'
//

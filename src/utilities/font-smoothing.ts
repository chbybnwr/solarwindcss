export { antialiased }
export { subpixelAntialiased }

import { create } from '@stylexjs/stylex'

const { antialiased, subpixelAntialiased } = create({
  antialiased: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
  },
  subpixelAntialiased: {
    MozOsxFontSmoothing: null,
    WebkitFontSmoothing: null,
  },
})

//

export { antialiased }
export { subpixelAntialiased }

const { antialiased, subpixelAntialiased } = create({
  antialiased: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  subpixelAntialiased: {
    WebkitFontSmoothing: 'auto',
    MozOsxFontSmoothing: 'auto',
  },
})

import { create } from '@stylexjs/stylex'
//

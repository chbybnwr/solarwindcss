export { sans }
export { serif }
export { mono }

import { create } from '@stylexjs/stylex'
import { fontFamily } from '../tokens/font-family.stylex'
import { fontFeatureSettings } from '../tokens/font-feature-settings.stylex'

const { sans, serif, mono } = create({
  sans: {
    fontFamily: fontFamily.sans,
    fontFeatureSettings: fontFeatureSettings.sans,
  },
  serif: {
    fontFamily: fontFamily.serif,
  },
  mono: {
    fontFamily: fontFamily.mono,
    fontFeatureSettings: fontFeatureSettings.mono,
  },
})

//

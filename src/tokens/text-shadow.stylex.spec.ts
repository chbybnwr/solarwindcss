describe('textShadow', () => {
  it('matches snapshot', () => {
    expect(textShadow).toMatchSnapshot()
  })
})

describe('textShadowColor', () => {
  it('matches snapshot', () => {
    expect(textShadowColor).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { textShadow } from '#/tokens/text-shadow.stylex'
import { textShadowColor } from '#/tokens/text-shadow.stylex'
//

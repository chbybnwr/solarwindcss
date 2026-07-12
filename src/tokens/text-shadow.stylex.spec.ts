describe('textShadow', () => {
  it('matches snapshot', () => {
    expect(textShadow).toMatchSnapshot()
  })
})

describe('textShadowVars', () => {
  it('matches snapshot', () => {
    expect(textShadowVars).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { textShadow } from '#/tokens/text-shadow.stylex'
import { textShadowVars } from '#/tokens/text-shadow.stylex'
//

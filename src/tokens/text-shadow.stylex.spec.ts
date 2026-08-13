describe('textShadow', () => {
  it('matches snapshot', () => {
    expect(textShadow).toMatchSnapshot()
  })
})

describe('textShadowVar', () => {
  it('matches snapshot', () => {
    expect(textShadowVar).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { textShadow } from '#/tokens/text-shadow.stylex'
import { textShadowVar } from '#/tokens/text-shadow.stylex'
//

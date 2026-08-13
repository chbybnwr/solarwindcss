describe('boxShadow', () => {
  it('matches snapshot', () => {
    expect(boxShadow).toMatchSnapshot()
  })
})

describe('boxShadowVar', () => {
  it('matches snapshot', () => {
    expect(boxShadowVar).toMatchSnapshot()
  })
})

import { boxShadow } from '#/tokens/box-shadow.stylex'
import { boxShadowVar } from '#/tokens/box-shadow.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

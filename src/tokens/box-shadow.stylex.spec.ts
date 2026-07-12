describe('boxShadow', () => {
  it('matches snapshot', () => {
    expect(boxShadow).toMatchSnapshot()
  })
})

describe('boxShadowVars', () => {
  it('matches snapshot', () => {
    expect(boxShadowVars).toMatchSnapshot()
  })
})

import { boxShadow } from '#/tokens/box-shadow.stylex'
import { boxShadowVars } from '#/tokens/box-shadow.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

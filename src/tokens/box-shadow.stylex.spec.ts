describe('boxShadow', () => {
  it('matches snapshot', () => {
    expect(boxShadow).toMatchSnapshot()
  })
})

describe('boxShadowColor', () => {
  it('matches snapshot', () => {
    expect(boxShadowColor).toMatchSnapshot()
  })
})

describe('insetBoxShadow', () => {
  it('matches snapshot', () => {
    expect(insetBoxShadow).toMatchSnapshot()
  })
})

import { boxShadow } from '#/tokens/box-shadow.stylex'
import { boxShadowColor } from '#/tokens/box-shadow.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { insetBoxShadow } from '#/tokens/box-shadow.stylex'
import { it } from 'vitest'
//

describe('blur', () => {
  it('matches snapshot', () => {
    expect(blur).toMatchSnapshot()
  })
})

describe('dropShadow', () => {
  it('matches snapshot', () => {
    expect(dropShadow).toMatchSnapshot()
  })
})

describe('dropShadowColor', () => {
  it('matches snapshot', () => {
    expect(dropShadowColor).toMatchSnapshot()
  })
})

import { blur } from '#/tokens/filter.stylex'
import { describe } from 'vitest'
import { dropShadow } from '#/tokens/filter.stylex'
import { dropShadowColor } from '#/tokens/filter.stylex'
import { expect } from 'vitest'
import { it } from 'vitest'
//

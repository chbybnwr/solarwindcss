describe('fontSize', () => {
  it('matches snapshot', () => {
    expect(fontSize).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { fontSize } from '#/tokens/font-size.stylex'
import { it } from 'vitest'
//

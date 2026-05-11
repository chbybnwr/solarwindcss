describe('letterSpacing', () => {
  it('matches snapshot', () => {
    expect(letterSpacing).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { letterSpacing } from '#/tokens/letter-spacing.stylex'
//

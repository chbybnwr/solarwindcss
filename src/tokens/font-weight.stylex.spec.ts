describe('fontWeight', () => {
  it('matches snapshot', () => {
    expect(fontWeight).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { fontWeight } from '#/tokens/font-weight.stylex'
import { it } from 'vitest'
//

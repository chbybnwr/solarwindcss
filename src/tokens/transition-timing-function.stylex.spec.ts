describe('transitionTimingFunction', () => {
  it('matches snapshot', () => {
    expect(transitionTimingFunction).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { transitionTimingFunction } from '#/tokens/transition-timing-function.stylex'
//

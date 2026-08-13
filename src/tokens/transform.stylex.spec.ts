describe('transform', () => {
  it('matches snapshot', () => {
    expect(transform).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { transform } from '#/tokens/transform.stylex'
//

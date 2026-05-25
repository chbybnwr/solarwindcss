describe('filter', () => {
  it('matches snapshot', () => {
    expect(filter).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { filter } from '#/tokens/filter.stylex'
import { it } from 'vitest'
//

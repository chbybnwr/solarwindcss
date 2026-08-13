describe('filter', () => {
  it('matches snapshot', () => {
    expect(filter).toMatchSnapshot()
  })
})

describe('filterVar', () => {
  it('matches snapshot', () => {
    expect(filterVar).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { filter } from '#/tokens/filter.stylex'
import { filterVar } from '#/tokens/filter.stylex'
import { it } from 'vitest'
//

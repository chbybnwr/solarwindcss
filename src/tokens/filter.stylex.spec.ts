describe('filter', () => {
  it('matches snapshot', () => {
    expect(filter).toMatchSnapshot()
  })
})

describe('filterVars', () => {
  it('matches snapshot', () => {
    expect(filterVars).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { filter } from '#/tokens/filter.stylex'
import { filterVars } from '#/tokens/filter.stylex'
import { it } from 'vitest'
//

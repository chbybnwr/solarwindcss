describe('truncate', () => {
  it('matches snapshot', () => {
    expect(truncate).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { truncate } from '#/utilities/text-overflow'
//

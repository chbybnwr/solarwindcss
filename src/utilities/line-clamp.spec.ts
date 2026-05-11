describe('lineClamp', () => {
  it('matches snapshot', () => {
    expect(lineClamp).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { lineClamp } from '#/utilities/line-clamp'
//

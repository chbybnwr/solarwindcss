describe('fontFamily', () => {
  it('matches snapshot', () => {
    expect(fontFamily).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { fontFamily } from '#/tokens/font-family.stylex'
import { it } from 'vitest'
//

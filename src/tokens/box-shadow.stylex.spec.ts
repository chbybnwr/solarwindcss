describe('boxShadow', () => {
  it('matches snapshot', () => {
    expect(boxShadow).toMatchSnapshot()
  })
})

import { boxShadow } from '#/tokens/box-shadow.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

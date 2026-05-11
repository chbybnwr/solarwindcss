describe('color', () => {
  it('matches snapshot', () => {
    expect(color).toMatchSnapshot()
  })
})

import { color } from '#/tokens/color.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

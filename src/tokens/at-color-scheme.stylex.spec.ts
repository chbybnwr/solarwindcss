describe('atContainer', () => {
  it('matches snapshot', () => {
    expect(atColorScheme).toMatchSnapshot()
  })
})

import { atColorScheme } from '#/tokens/at-color-scheme.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

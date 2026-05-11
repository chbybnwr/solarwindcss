describe('theme', () => {
  it('matches snapshot', () => {
    expect(theme).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { theme } from '#/tokens/theme.stylex'
//

describe('atMedia', () => {
  it('matches snapshot', () => {
    expect(atDark).toMatchSnapshot()
  })
})

import { atDark } from './at-dark.stylex.ts'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

describe('animationName', () => {
  it('matches snapshot', () => {
    expect(animationName).toMatchSnapshot()
  })
})

import { animationName } from '#/tokens/animation-name.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

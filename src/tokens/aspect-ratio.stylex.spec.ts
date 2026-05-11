describe('aspectRatio', () => {
  it('matches snapshot', () => {
    expect(aspectRatio).toMatchSnapshot()
  })
})

import { aspectRatio } from '#/tokens/aspect-ratio.stylex'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
//

describe('transition', () => {
  it('matches snapshot', () => {
    expect(transition).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { transition } from '#/utilities/transition'
//

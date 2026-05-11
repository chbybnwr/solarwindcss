describe('textSize', () => {
  it('matches snapshot', () => {
    expect(textSize).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { textSize } from '#/utilities/text-size'
//

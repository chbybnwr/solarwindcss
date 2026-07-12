describe('lineClamped', () => {
  it('matches snapshot', () => {
    expect(lineClamped).toMatchSnapshot()
  })
})

describe('notLineClamped', () => {
  it('matches snapshot', () => {
    expect(notLineClamped).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { lineClamped } from '#/utilities/line-clamp'
import { notLineClamped } from '#/utilities/line-clamp'
//

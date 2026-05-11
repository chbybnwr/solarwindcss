describe('antialiased', () => {
  it('matches snapshot', () => {
    expect(antialiased).toMatchSnapshot()
  })
})

describe('subpixelAntialiased', () => {
  it('matches snapshot', () => {
    expect(subpixelAntialiased).toMatchSnapshot()
  })
})

import { antialiased } from '#/utilities/font-smoothing'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { subpixelAntialiased } from '#/utilities/font-smoothing'
//

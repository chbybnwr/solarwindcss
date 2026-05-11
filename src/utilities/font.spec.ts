describe('sans', () => {
  it('matches snapshot', () => {
    expect(sans).toMatchSnapshot()
  })
})

describe('serif', () => {
  it('matches snapshot', () => {
    expect(serif).toMatchSnapshot()
  })
})

describe('mono', () => {
  it('matches snapshot', () => {
    expect(mono).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { mono } from '#/utilities/font'
import { sans } from '#/utilities/font'
import { serif } from '#/utilities/font'
//

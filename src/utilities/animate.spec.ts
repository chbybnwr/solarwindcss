describe('spin', () => {
  it('matches snapshot', () => {
    expect(spin).toMatchSnapshot()
  })
})

describe('ping', () => {
  it('matches snapshot', () => {
    expect(ping).toMatchSnapshot()
  })
})

describe('pulse', () => {
  it('matches snapshot', () => {
    expect(pulse).toMatchSnapshot()
  })
})

describe('bounce', () => {
  it('matches snapshot', () => {
    expect(bounce).toMatchSnapshot()
  })
})

import { bounce } from '#/utilities/animate'
import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { ping } from '#/utilities/animate'
import { pulse } from '#/utilities/animate'
import { spin } from '#/utilities/animate'
//

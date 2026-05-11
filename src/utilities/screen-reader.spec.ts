describe('screenReaderOnly', () => {
  it('matches snapshot', () => {
    expect(screenReaderOnly).toMatchSnapshot()
  })
})

describe('notScreenReaderOnly', () => {
  it('matches snapshot', () => {
    expect(notScreenReaderOnly).toMatchSnapshot()
  })
})

import { describe } from 'vitest'
import { expect } from 'vitest'
import { it } from 'vitest'
import { notScreenReaderOnly } from '#/utilities/screen-reader'
import { screenReaderOnly } from '#/utilities/screen-reader'
//

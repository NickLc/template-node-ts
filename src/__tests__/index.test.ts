import { expect, test } from '@jest/globals'
import { greeter } from '../index'
test('My Greeter', () => {
  expect(greeter('Carl')).toBe('Hello Carl')
})

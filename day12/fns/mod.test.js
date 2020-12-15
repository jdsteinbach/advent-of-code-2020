const mod = require('./mod')

test('correct answers, based on 4', () => {
  expect(mod(1, 4)).toBe(1)
  expect(mod(2, 4)).toBe(2)
  expect(mod(3, 4)).toBe(3)
  expect(mod(4, 4)).toBe(0)
  expect(mod(-1, 4)).toBe(3)
})

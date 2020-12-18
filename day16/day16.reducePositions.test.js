const { reducePositions } = require('./index')

const positions = {
  a: [1, 2, 3, 4, 5],
  b: [1, 2, 3, 5],
  c: [1],
  d: [1, 2, 5],
  e: [1, 5],
  f: [1, 3, 6, 5, 2, 4]
}

const result = {
  a: 4,
  b: 3,
  c: 1,
  d: 2,
  e: 5,
  f: 6
}

test('reducePositions', () => {
  expect(reducePositions(positions)).toStrictEqual(result)
})

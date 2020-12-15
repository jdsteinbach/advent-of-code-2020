const move = require('./move')

const start00 = {
  x: 0,
  y: 0
}
const start428 = {
  x: 4,
  y: 28
}
const moveValues = (action, value) => ({
  action,
  value
})

test('move - N3 from 0,0', () => {
  expect(move(moveValues('N', 3), start00)).toStrictEqual({x: 0, y: 3})
})
test('move - E3 from 0,0', () => {
  expect(move(moveValues('E', 3), start00)).toStrictEqual({x: 3, y: 0})
})
test('move - S3 from 0,0', () => {
  expect(move(moveValues('S', 3), start00)).toStrictEqual({x: 0, y: -3})
})
test('move - W3 from 0,0', () => {
  expect(move(moveValues('W', 3), start00)).toStrictEqual({x: -3, y: 0})
})


test('move - N3 from 4,28', () => {
  expect(move(moveValues('N', 3), start428)).toStrictEqual({x: 4, y: 31})
})
test('move - E3 from 4,28', () => {
  expect(move(moveValues('E', 3), start428)).toStrictEqual({x: 7, y: 28})
})
test('move - S3 from 4,28', () => {
  expect(move(moveValues('S', 3), start428)).toStrictEqual({x: 4, y: 25})
})
test('move - W3 from 4,28', () => {
  expect(move(moveValues('W', 3), start428)).toStrictEqual({x: 1, y: 28})
})

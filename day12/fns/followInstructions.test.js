const followInstructions = require('./followInstructions')

const start00 = {
  direction: 'E',
  x: 0,
  y: 0
}
const start428 = {
  direction: 'W',
  x: 4,
  y: 28
}
const moveValues = (action, value) => ({
  action,
  value
})

test('followInstructions - N3 from 0,0', () => {
  expect(followInstructions(moveValues('N', 3), start00)).toStrictEqual({direction: 'E', x: 0, y: 3})
})
test('followInstructions - E3 from 0,0', () => {
  expect(followInstructions(moveValues('E', 3), start00)).toStrictEqual({direction: 'E', x: 3, y: 0})
})
test('followInstructions - S3 from 0,0', () => {
  expect(followInstructions(moveValues('S', 3), start00)).toStrictEqual({direction: 'E', x: 0, y: -3})
})
test('followInstructions - W3 from 0,0', () => {
  expect(followInstructions(moveValues('W', 3), start00)).toStrictEqual({direction: 'E', x: -3, y: 0})
})


test('followInstructions - N3 from 4,28', () => {
  expect(followInstructions(moveValues('N', 3), start428)).toStrictEqual({direction: 'W', x: 4, y: 31})
})
test('followInstructions - E3 from 4,28', () => {
  expect(followInstructions(moveValues('E', 3), start428)).toStrictEqual({direction: 'W', x: 7, y: 28})
})
test('followInstructions - S3 from 4,28', () => {
  expect(followInstructions(moveValues('S', 3), start428)).toStrictEqual({direction: 'W', x: 4, y: 25})
})
test('followInstructions - W3 from 4,28', () => {
  expect(followInstructions(moveValues('W', 3), start428)).toStrictEqual({direction: 'W', x: 1, y: 28})
})


test('followInstructions - R90 from 0,0', () => {
  expect(followInstructions(moveValues('R', 90), start00)).toStrictEqual({direction: 'S', x: 0, y: 0})
})
test('followInstructions - R180 from 0,0', () => {
  expect(followInstructions(moveValues('R', 180), start00)).toStrictEqual({direction: 'W', x: 0, y: 0})
})
test('followInstructions - R270 from 0,0', () => {
  expect(followInstructions(moveValues('R', 270), start00)).toStrictEqual({direction: 'N', x: 0, y: 0})
})
test('followInstructions - R360 from 0,0', () => {
  expect(followInstructions(moveValues('R', 360), start00)).toStrictEqual({direction: 'E', x: 0, y: 0})
})

test('followInstructions - L90 from 0,0', () => {
  expect(followInstructions(moveValues('L', 90), start00)).toStrictEqual({direction: 'N', x: 0, y: 0})
})
test('followInstructions - L180 from 0,0', () => {
  expect(followInstructions(moveValues('L', 180), start00)).toStrictEqual({direction: 'W', x: 0, y: 0})
})
test('followInstructions - L270 from 0,0', () => {
  expect(followInstructions(moveValues('L', 270), start00)).toStrictEqual({direction: 'S', x: 0, y: 0})
})
test('followInstructions - L360 from 0,0', () => {
  expect(followInstructions(moveValues('L', 360), start00)).toStrictEqual({direction: 'E', x: 0, y: 0})
})

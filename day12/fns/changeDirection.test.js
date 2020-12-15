const changeDirection = require('./changeDirection')

test('left turns', () => {
  const leftZero = {
    action: 'L',
    value: 0
  }

  const leftOne = {
    action: 'L',
    value: 90
  }

  const leftTwo = {
    action: 'L',
    value: 180
  }

  const leftThree = {
    action: 'L',
    value: 270
  }

  const leftFour = {
    action: 'L',
    value: 360
  }

  expect(changeDirection(leftZero, 'N')).toBe('N')
  expect(changeDirection(leftZero, 'E')).toBe('E')
  expect(changeDirection(leftZero, 'S')).toBe('S')
  expect(changeDirection(leftZero, 'W')).toBe('W')

  expect(changeDirection(leftOne, 'N')).toBe('W')
  expect(changeDirection(leftOne, 'E')).toBe('N')
  expect(changeDirection(leftOne, 'S')).toBe('E')
  expect(changeDirection(leftOne, 'W')).toBe('S')

  expect(changeDirection(leftTwo, 'N')).toBe('S')
  expect(changeDirection(leftTwo, 'E')).toBe('W')
  expect(changeDirection(leftTwo, 'S')).toBe('N')
  expect(changeDirection(leftTwo, 'W')).toBe('E')

  expect(changeDirection(leftThree, 'N')).toBe('E')
  expect(changeDirection(leftThree, 'E')).toBe('S')
  expect(changeDirection(leftThree, 'S')).toBe('W')
  expect(changeDirection(leftThree, 'W')).toBe('N')

  expect(changeDirection(leftFour, 'N')).toBe('N')
  expect(changeDirection(leftFour, 'E')).toBe('E')
  expect(changeDirection(leftFour, 'S')).toBe('S')
  expect(changeDirection(leftFour, 'W')).toBe('W')
})

test('right turns', () => {
  const rightZero = {
    action: 'R',
    value: 0
  }

  const rightOne = {
    action: 'R',
    value: 90
  }

  const rightTwo = {
    action: 'R',
    value: 180
  }

  const rightThree = {
    action: 'R',
    value: 270
  }

  const rightFour = {
    action: 'R',
    value: 360
  }

  expect(changeDirection(rightZero, 'N')).toBe('N')
  expect(changeDirection(rightZero, 'E')).toBe('E')
  expect(changeDirection(rightZero, 'S')).toBe('S')
  expect(changeDirection(rightZero, 'W')).toBe('W')

  expect(changeDirection(rightOne, 'N')).toBe('E')
  expect(changeDirection(rightOne, 'E')).toBe('S')
  expect(changeDirection(rightOne, 'S')).toBe('W')
  expect(changeDirection(rightOne, 'W')).toBe('N')

  expect(changeDirection(rightTwo, 'N')).toBe('S')
  expect(changeDirection(rightTwo, 'E')).toBe('W')
  expect(changeDirection(rightTwo, 'S')).toBe('N')
  expect(changeDirection(rightTwo, 'W')).toBe('E')

  expect(changeDirection(rightThree, 'N')).toBe('W')
  expect(changeDirection(rightThree, 'E')).toBe('N')
  expect(changeDirection(rightThree, 'S')).toBe('E')
  expect(changeDirection(rightThree, 'W')).toBe('S')

  expect(changeDirection(rightFour, 'N')).toBe('N')
  expect(changeDirection(rightFour, 'E')).toBe('E')
  expect(changeDirection(rightFour, 'S')).toBe('S')
  expect(changeDirection(rightFour, 'W')).toBe('W')
})

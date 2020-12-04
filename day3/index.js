const trees = require('./getTrees')

let x = 0
let y = 0
const xOffset = 3
const yOffset = 1
let treeCount1 = 0
let treeCount2 = [
  {
    xOffset: 1,
    yOffset: 1,
    count: 0
  },
  {
    xOffset: 3,
    yOffset: 1,
    count: 0
  },
  {
    xOffset: 5,
    yOffset: 1,
    count: 0
  },
  {
    xOffset: 7,
    yOffset: 1,
    count: 0
  },
  {
    xOffset: 1,
    yOffset: 2,
    count: 0
  },
];

const isTree = (row, x) => {
  const loopedOffset = x % row.length

  return row.charAt(loopedOffset) === '#'
}

const treeLoop = (xOffset, yOffset) => {
  xOffset = xOffset || 1
  yOffset = yOffset || 1
  let count = 0
  let x = 0
  let y = 0

  while (y < trees.length) {
    const row = trees[y]
    count += isTree(row, x)
    x += xOffset
    y += yOffset
  }

  return count
}

treeCount1 = treeLoop(xOffset)

treeCount2.map(config => {
  config.count = treeLoop(config.xOffset, config.yOffset)
})

const multTotal = treeCount2.reduce((acc, curr) => {
  return acc * curr.count
}, 1)

console.log({treeCount1, treeCount2, multTotal})

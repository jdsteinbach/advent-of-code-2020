const {
  input
} = require('./getInput')

const flattenInput = input => {
  const values = {}

  input.forEach((line, y) => {
    line.forEach((item, x) => {
      const key = [x,y,0,0].join(',')
      values[key] = (item === '#')
    })
  })

  return values
}

const getNeighbors = (x, y, z, w, input) => {
  let neighbors = []

  for (let i = (x - 1); i <= (x + 1); i++) {
    for (let j = (y - 1); j <= (y + 1); j++) {
      for (let k = (z - 1); k <= (z + 1); k++) {
        for (let l = (w - 1); l <= (w + 1); l++) {
          if (i !== x || j !== y || k !== z || l !== w) {
            const key = [i,j,k,l].join(',')
            const value = (key in input)
              ? input[key]
              : false

            neighbors.push(value)
          }
        }
      }
    }
  }

  return neighbors
}

const applyCycle = input => {
  const keys = Object.keys(input)
  let newValues = {}

  let minX = null
  let minY = null
  let minZ = null
  let minW = null
  let maxX = null
  let maxY = null
  let maxZ = null
  let maxW = null

  for (let k of keys) {
    const [x,y,z,w] = k.split(',').map(v => parseInt(v, 10))
    if (x < minX) minX = x
    if (y < minY) minY = y
    if (z < minZ) minZ = z
    if (w < minW) minW = w
    if (x > maxX) maxX = x
    if (y > maxY) maxY = y
    if (z > maxZ) maxZ = z
    if (w > maxW) maxW = w
  }

  for (let x = (minX - 1); x <= (maxX + 1); x++) {
    for (let y = (minY - 1); y <= (maxY + 1); y++) {
      for (let z = (minZ - 1); z <= (maxZ + 1); z++) {
        for (let w = (minW - 1); w <= (maxW + 1); w++) {
          const neighbors = getNeighbors(x, y, z, w, input)
          const activeNeighbors = neighbors.filter(x => x).length
          const key = [x,y,z,w].join(',')
          const cubeValue = (key in input) ? input[key] : false

          if (cubeValue && activeNeighbors !== 2 && activeNeighbors !== 3) {
            newValues[key] = false
          } else if (!cubeValue && activeNeighbors === 3) {
            newValues[key] = true
          } else {
            newValues[key] = cubeValue
          }
        }
      }
    }
  }

  return newValues
}

const runCycles = (input, count) => {
  count = count || 6
  let newValues = Object.assign({}, input)

  for (let i = 0; i < count; i ++) {
    newValues = applyCycle(newValues)
    console.log({i})
  }

  return newValues
}

const countActive = values => Object.values(values).filter(v => v).length

const finalState = runCycles(
  flattenInput(input)
)

console.log({
  // finalState,
  answer1: countActive(finalState)
})

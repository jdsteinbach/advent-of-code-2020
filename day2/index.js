const passwords = require('./getPasswords')

const generateRegex = key => {
  const matches = key.match(/^(\d+)-(\d+)\s(\w)$/)

  if (!matches) return false

  return {
    min: matches[1],
    max: matches[2],
    char: matches[3],
  }
}

let firstCount = 0
let secondCount = 0

passwords.map(p => {
  const { policy, password } = p

  if (!policy || !password) return

  const { min, max, char } = generateRegex(policy)

  const pattern = new RegExp(`${char}`, 'gi')
  const match = password.match(pattern)
  const length = match ? match.length : 0

  if ((length >= min) && (length <= max)) {
    firstCount++
  }

  const firstMatch = password.slice(min - 1, min) === char
  const secondMatch = password.slice(max - 1, max) === char

  const isValid = (
    firstMatch + secondMatch === 1
  )

  if (isValid) {
    secondCount++
  }
})

console.log({firstCount, secondCount})

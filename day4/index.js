const passportsData = require('./getPassports')

const isBetween = (value, min, max) => {
  return value >= min && value <= max
}

const validators = {
  byr: v => {
    if (v.length !== 4) return false

    const year = parseInt(v, 10)
    return isBetween(year, 1920, 2002)
  },
  iyr: v => {
    if (v.length !== 4) return false

    const year = parseInt(v, 10)
    return isBetween(year, 2010, 2020)
  },
  eyr: v => {
    if (v.length !== 4) return false

    const year = parseInt(v, 10)
    return isBetween(year, 2020, 2030)
  },
  hgt: v => {
    if (v.match(/cm$/)) {
      const h = parseInt(v.replace('cm', ''), 10)
      return isBetween(h, 150, 193)
    }
    if (v.match(/in$/)) {
      const h = parseInt(v.replace('in', ''), 10)
      return isBetween(h, 59, 76)
    }
    return false
  },
  hcl: v => {
    const regex = new RegExp(/^#[a-f0-9]{6}$/, 'i')
    return regex.test(v)
  },
  ecl: v => {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].indexOf(v) > -1
  },
  pid: v => {
    const regex = new RegExp(/^[0-9]{9,9}$/)
    return regex.test(v)
  },
}

const passports1 = []
const passports2 = []

passportsData
  .map(p => p.replace('\n', ' '))
  .map(p => {
    let fields = []
    const fieldsData = p.match(/([a-z]{3,3}):([^\s]*)/gi).map(f => {
      const [key, value] = f.split(':')
      fields[key] = value
    })
    const keys = Object.keys(fields)

    if (Object.keys(validators).every(k => keys.indexOf(k) > -1)) {
      passports1.push(fields)
    }

    const validations = Object.keys(validators).map(k => {
      return fields[k] && validators[k](fields[k])
    })

    if (validations.every(v => v)) {
      passports2.push(fields)
    }
  })

console.log({
  passports1: passports1.length,
  passports2: passports2.length
})

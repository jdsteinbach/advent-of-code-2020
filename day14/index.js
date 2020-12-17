const bits = require('./getBits')

const toBinary = decimal => {
  const bits = (decimal >>> 0).toString(2)
  return bits.padStart(36, '0')
}

const toDecimal = binary => parseInt(binary, 2)

const maskBits = (value, mask) => {
  let valueArray = value.split('')
  const maskArray = mask.split('')
  for (let i = 0; i < 36; i++) {
    if (maskArray[i] !== 'X') {
      valueArray[i] = maskArray[i]
    }
  }
  return valueArray.join('')
}

const maskAddress = (address, mask) => {
  address = Array.isArray(address)
    ? address
    : address.split('')

  mask = Array.isArray(mask)
    ? mask
    : mask.split('')

  for (let i = 0; i < 36; i++) {
    if (mask[i] !== '0') {
      address[i] = mask[i]
    }
  }

  return address.join('')
}

const getFloatingAddressArray = maskedAddresses => {
  maskedAddresses = Array.isArray(maskedAddresses)
    ? maskedAddresses
    : [maskedAddresses]
  let more = false
  let allAddresses = []

  for (let i = 0; i < maskedAddresses.length; i++) {
    let m = maskedAddresses[i]
    let x = m.indexOf('X')
    if (x > -1) {
      let mask0 = m.split('')
      mask0[x] = 0

      let mask1 = m.split('')
      mask1[x] = 1

      allAddresses.push(mask0.join(''), mask1.join(''))
      more = true
    }
  }

  if (more) {
    return getFloatingAddressArray(allAddresses)
  } else {
    return maskedAddresses
  }
}

const getAnswer1 = bits => {
  let mem = {}
  bits.forEach(({mask, lines}) => {
    lines.forEach(l => {
      mem[l.pos] = maskBits(toBinary(l.value), mask)
    })
  })
  return Object.values(mem).reduce((acc, i) => {
    return acc + toDecimal(i)
  }, 0)
}

const getAnswer2 = bits => {
  let mem = {}
  bits.forEach(({mask, lines}) => {
    lines.forEach(l => {
      const allLines = getFloatingAddressArray(
        maskAddress(
          toBinary(l.pos),
          mask
        )
      )
      allLines.forEach(al => {
        mem[toDecimal(al)] = l.value
      })
    })
  })

  return Object.values(mem).reduce((acc, i) => {
    return acc + i
  }, 0)
}

const answer1 = getAnswer1(bits)
const answer2 = getAnswer2(bits)

console.log({answer1, answer2})

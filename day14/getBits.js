const getData = require('../utils/getData')

module.exports = getData('day14/bits.txt', /mask/)
  .map(block => {
    let [mask, ...lines] = block.split('\n')

    mask = mask.replace(' = ', '')
    lines = lines
      .filter(l => l)
      .map(l => {
        const [raw, pos, value] = l.match(/^mem\[(\d+)\]\s=\s(\d+)$/m)
        return {
          pos,
          value: parseInt(value, 10)
        }
      })

    return {
      mask,
      lines
    }
  })

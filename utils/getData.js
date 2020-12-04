const { readFileSync } = require('fs')

const getData = (filePath, splitter) => {
  splitter = splitter || /\r?\n/

  try {
    const data = readFileSync(filePath, 'UTF-8')

    const lines = data.split(splitter).filter(line => line)

    return lines
  } catch (err) {
    console.error(err)
    return []
  }
}

module.exports = getData

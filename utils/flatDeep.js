const flatDeep = (arr, d) => {
  d = d || 1
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
  : arr.slice();
};

module.exports = flatDeep

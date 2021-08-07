module.exports = function reverse (n) {
    const createArr = String(n).split('')

    createArr.includes('-')?createArr.shift():createArr
  
    return createArr.reverse().join('')
}

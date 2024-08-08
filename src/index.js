module.exports = function reverse (n) {
  let result = ''
  let absString = Math.abs(n)
  let String = absString.toString()

  for (let i = 0; i < String.length; i++) {
    result =`${String[i]}${result}`
  }
  return result
}
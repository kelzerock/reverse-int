module.exports = function reverse (n) {
  let result = '';
  n = Math.abs(n).toString()
console.log(n)
  for (let i=0; i<n.length;i++) {
    result += n[n.length-1-i]
  }
  return result
}


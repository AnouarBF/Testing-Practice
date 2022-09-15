function analyzeArray(arr){
  const maximum = Math.max(...arr)
  const minimum = Math.min(...arr)
  const average = Math.floor((maximum + minimum)/2)
  const arrLength = arr.length;
  return {maximum, minimum, average, arrLength}
}

console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = analyzeArray;
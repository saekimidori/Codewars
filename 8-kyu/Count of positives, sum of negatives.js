// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    let arr = []
    if (input === null || input.length < 1) {
      return arr
    } else {
      let count = input.filter(n => n > 0).length
      let sum = input.filter(n => n < 0).reduce((a,c) => a + c, 0)
      arr.push(count, sum)
      return arr
    }
}
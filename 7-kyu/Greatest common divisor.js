// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// // first attempt
// const mygcd = (x,y) => {
//   const maxInt = Math.max(x, y)
//   let divisors = []
//   for (i = 1; i <= maxInt; i++) {
//     if (x % i === 0 && y % i === 0) {
//       divisors.push(i)
//     }
//   }
//   return Math.max(...divisors)
// }

// second attempt. loop backwards
const mygcd = (x,y) => {
    const maxInt = Math.max(x, y)
    let maxDivisor = 0
    for (i = maxInt; i >= 1; i--) {
      if (x % i === 0 && y % i === 0) {
        maxDivisor = i
        break
      }
    }
    return maxDivisor
}
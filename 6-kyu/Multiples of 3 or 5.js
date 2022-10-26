// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

const solution = number => {
    // receives num
    // find nums that are multiplies of 3 or 5 below passed num
    // if num is -, return 0
    // return sum of multiples
    // if nums are multiple of both 3 and 5, count once
    
    // define empty arr
    let arr = []
    // for loop, i < number
    for (i = 1; i < number; i++) {
      // if i % 3 || 5 === 0, add to arr
      if (i % 3 === 0 || i % 5 === 0)
        arr.push(i)
    }
    // remove duplicates => new Set of arr
    const multiples = Array.from(new Set(arr))
    // add multiples => reduce
    return Math.sign(number) === -1 ? 0 : multiples.reduce((a, c) => a + c, 0)
}
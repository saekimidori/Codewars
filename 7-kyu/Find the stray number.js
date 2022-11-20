// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

const stray = numbers => {
    // receives odd length array >= 3, all nums the same except one
    // return the single num that's different
    
    // indexOf === lastIndexOf
    for (const num of numbers) {
      if (numbers.indexOf(num) === numbers.lastIndexOf(num))
        return num
    }
}
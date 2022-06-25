// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array.

function countBy(x, n) {
    let multiples = []
  
    for (i = 1; multiples.length < n; i++) {
      if (i % x === 0) {
        multiples.push(i)
      }
    }
    
    return multiples
}
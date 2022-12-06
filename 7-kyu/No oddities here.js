// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const noOdds = values => 
  // takes an array
  // return all non-odd values
  
  // filter => num % 2 === 0
  values.filter(num => num % 2 === 0)
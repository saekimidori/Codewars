// Given an integral number, determine if it's a square number.

const isSquare = n => 
  // receives num
  // return true/false if num is square num
  
  // check if result of square root of num is a whole num (integer)
  Number.isInteger(Math.sqrt(n))


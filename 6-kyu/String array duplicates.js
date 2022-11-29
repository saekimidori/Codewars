// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// Strings will be lowercase only, no spaces.

const dup = array =>
  // takes array of strings
  // return array with consecutive duplicate letters removed from each string
  
  // map => split words, filter => (letter, idx, arr) => arr[idx] !== arr[idx+1], join
  array.map(word => word.split('').filter((letter, idx, arr) => arr[idx] !== arr[idx+1]).join(''))
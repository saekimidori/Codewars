// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const createPhoneNumber = numbers => {
    const numSet = (idx1, idx2) => numbers.slice(idx1, idx2).join('')
  
    const set1 = numSet(0,3)
    const set2 = numSet(3,6)
    const set3 = numSet(6)
  
    return `(${set1}) ${set2}-${set3}`
}
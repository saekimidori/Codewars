// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = word => {
  // takes a string
  // return array of indices where capital letters are found
  
  // forEach => letter === toUpperCase ? return index
  let array = []
  word.split('').forEach((letter, idx) => letter === letter.toUpperCase() ? array.push(idx) : null)
  return array
}
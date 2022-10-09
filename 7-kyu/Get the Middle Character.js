// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const getMiddle = str =>
  str.length % 2 === 0 ? `${str[str.length/2-1]}${str[str.length/2]}` :
                          str[Math.floor(str.length/2)]
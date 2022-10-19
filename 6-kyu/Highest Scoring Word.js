// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = str => {
    // takes in str of words
    // each letter = pos of alph, e.g. a = 1, b = 2
    // return word w/ highest score as str
    // if two words score same, return word that appears first
    
    // delcare alphs
    const alphs = 'abcdefghijklmnopqrstuvwxyz'
    // for each word, sum the value of each letter
    const wordValue = word =>
      word.split('')
          .map(letter => [...alphs].indexOf(letter)+1)
          .reduce((a, c) => a + c, 0)
    // split str ' '
    const splitStr = str.split(' ')
    // put in array values of words
    const arrOfValues = splitStr.map(word => wordValue(word))
    // find index of highest value word
    const highValueIdx = arrOfValues.indexOf(Math.max(...arrOfValues))
    // return the word w/ highest value (if ==, return earliest word)
    return splitStr[highValueIdx]
}
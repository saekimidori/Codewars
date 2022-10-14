// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const spinWords = string => {
    // takes in a string (1 or more words)
    // returns string with words that have 5+ letters reversed
    const checkWord = word => word.length >= 5 ? word.split('').reverse().join('') : word
    
    // check if string has more than one word, then check for long words
    // split string by space if more than 1 word, then check for long words, then join
    return string.length === 1 ? checkWord(string) : string.split(' ').map(el => checkWord(el)).join(' ')
}
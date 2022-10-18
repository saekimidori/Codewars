// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const isPangram = string => {
    // takes a str
    // return boolean if str contains every letter of alph
    // ignore nums and punctuation
    
    // declare alphs
    const alphs = 'abcdefghijklmnopqrstuvwxyz'
    // filter out anything that isn't a letter
    const testStr = string.toLowerCase().split('').filter(char => [...alphs].includes(char))
    // check if every letter in str is included in alphs
    return [...alphs].every(letter => testStr.includes(letter))
}
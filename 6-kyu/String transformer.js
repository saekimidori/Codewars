// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// You may assume the input only contain English alphabet and spaces.

const stringTransformer = str => {
    // receives str
    // return str w/ uppercase -> lowercase and vice versa
    // reverse order of words
    // need to handle multiple spaces and leading/trailing spaces
    
    // split str ' ' to separate words, reverse and join back
    const wordsReversed = str.split(' ').reverse().join(' ')
    // split str into letters
    const letters = wordsReversed.split('')
    // for each letter, switch cases of letters
    return letters.map(letter => 
                       letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())
                       // join letters and words together
                       .join('')
}
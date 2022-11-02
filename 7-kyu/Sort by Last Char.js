// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

const last = str => {
    // receives str of words
    // return array of words sorted alphabetically by final char
    // if two words have same last char, return them in same order
    
    // split str ' ', get last char of each word
    // sort => localeCompare
    const lastChar = word => word.slice(-1)
    return str.split(' ').sort((a,b) => lastChar(a).localeCompare(lastChar(b)))
}
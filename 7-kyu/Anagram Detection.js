// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

const isAnagram = (test, original) => {
    // takes two strings
    // return booleon if the two strings are anagrams of each other
    
    // toLowerCase, sort strings and compare
    const sortStr = str => str.toLowerCase().split('').sort().join('') 
    return sortStr(test) === sortStr(original)
}
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

const longest = (str1, str2) => {
    // takes two strings, only letters a-z
    // return new, sorted str with distinct letters from str1 and str2
    
    // combine both strings, new Set, sort
    const distinctLetters = new Set(str1.concat(str2))
    return Array.from(distinctLetters).sort((a, b) => a.localeCompare(b)).join('')
}
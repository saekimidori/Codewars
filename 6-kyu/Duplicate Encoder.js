// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const duplicateEncode = word => {
    // takes in a str
    // returns a new str => '(' if char does not repeat, ')' if it repeats
    // ignore cases
    
    // split str, map, 
    const arr = word.toLowerCase().split('')
    // define obj, func to count x times char appears in str
    const repeatCount = {}
    const checkRepeat = el => repeatCount.hasOwnProperty(el) ? repeatCount[el] += 1 : repeatCount[el] = 0
    arr.map(char => checkRepeat(char))
    // if char in obj is 0 === Boolean false
    return arr.map(char => repeatCount[char] ? ')' : '(').join('') 
}
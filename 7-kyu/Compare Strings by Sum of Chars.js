// Compare two strings by comparing the sum of their values (ASCII character code).

// For comparing treat all letters as UpperCase
// null/NULL/Nil/None should be treated as empty strings
// If the string contains other characters than letters, treat the whole string as it would be empty

// Your method should return true, if the strings are equal and false if they are not equal.

const compare = (str1, str2) => {

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
    // if str1 or str2 is null, return '', otherwise return str uppercased
    str1 = str1 === null ? '' : str1.toUpperCase()
    str2 = str2 === null ? '' : str2.toUpperCase()
    
    // function to assign char code or empty str to char
    const charValue = char => ![...letters].includes(char) ? '' : char.charCodeAt(0)
    
    // for each char in str, run charValue function
    str1 = [...str1].map(charValue)
    str2 = [...str2].map(charValue)
    
    // if str includes empty string, value = 0, otherwise add char code values of entire str
    const str1Value = str1.includes('') ? 0 : str1.reduce((a, b) => a + b, 0)
    const str2Value = str2.includes('') ? 0 : str2.reduce((a, b) => a + b, 0)
    
    return str1Value === str2Value
}
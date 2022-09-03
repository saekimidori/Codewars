// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

const solve = str => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    
    // function to replace character with '&' if it is a letter
    const replaceLetter = char => [...letters].includes(char) ? '&' : char
    
    // assigns a new string with all letters replaced with '&'
    const newStr = [...str].map(replaceLetter).join('')
    
    // creates an array with ascending element value, minus the '&'
    const sortedStr = newStr.split('&').sort((a,b) => a - b)
    
    // returns the last element in array (which is the largest) in number format
    return +sortedStr[sortedStr.length-1]
}
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

const isVow = arr => {
    const vowels = Array.from('aeiou')
    const vowelCharCodes = vowels.map(letter => letter.charCodeAt())
  
    return [...arr].map(
      num => vowelCharCodes.indexOf(num) === -1 ? num : vowels.find(vowel => vowel.charCodeAt() === num)
    )
    
}
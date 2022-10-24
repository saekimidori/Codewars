// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
    // The first letter must be converted to its ASCII code.
    // The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

const encryptThis = text => {
    // receives str of words separated by space
    // returns first letter as ASCII code
    // second letter switched with last letter
    // no special chars
    
    // split str ' '
    const splitStr = text.split(' ')
    // func to return word[0] charCodeAt, last char of word, split, slice(2), join '' + word[1]
    const encrypt = word => {
      const charCode = word.charCodeAt(0)
      const charIdx2 = word.length !== 1 ? word[1] : ''
      const lastChar = word.length > 2 ? word[word.length-1] : ''
      const midChars = word.split('').slice(2, word.length-1).join('')
      return charCode + lastChar + midChars + charIdx2
    }
    // map text arr
    return splitStr.map(word => encrypt(word)).join(' ')
}
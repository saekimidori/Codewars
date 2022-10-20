// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = string => {  
    // takes str, can be empty
    
    // define empty obj
    let charCount = {}
    // if empty, return {}
    if (string === '')
      return charCount
    // otherwise return letter and how many times it appears in str
    // split str and iterate, use hasOwnProperty to check letters
    const splitStr = string.split('')
  
    for (const letter of splitStr) {
      // add letter and add 1 to value in obj
      charCount.hasOwnProperty(letter) ? charCount[letter] += 1 : charCount[letter] = 1
    }
    
    return charCount
}
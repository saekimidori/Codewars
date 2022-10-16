// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

const duplicateCount = text => {
    // takes a str => contains alphs (upper and lower) and nums
    // return count of alphs (case insensitive) and nums that occur more than once
    
    // toLowerCase, split text
    const chars = Array.from(text.toLowerCase())
    // declare object {} and add occurance to obj by use of hasOwnProperty and num value
    let charCount = {}
    // declare num of duplicates variable
    let duplicates = 0
    
    for (const value of chars){
      charCount.hasOwnProperty(value) ? charCount[value] += 1 : charCount[value] = 1
    }
    // return the num of properties in obj that have value of more than 1
    for (const prop in charCount) {
      if (charCount[prop] > 1) duplicates += 1
    }
    
    return duplicates
}
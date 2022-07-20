// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = x => {
    x = x.toLowerCase()
    return x === x.split('').reverse().join('')
}
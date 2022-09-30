// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

const shortcut = string => {
    const vowels = 'aeiou'
    
    return string.split('')
                 .filter(letter => ![...vowels].includes(letter))
                 .join('')
}
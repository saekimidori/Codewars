// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let sum = 0
    
    str.split('').forEach(l => vowels.includes(l) ? sum += 1 : 0)
    
    return sum
}
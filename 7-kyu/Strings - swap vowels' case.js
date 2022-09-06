// Given a string, return a copy of the string with the vowels' case swapped.

const swapVowelCase = str => {
    const vowels = 'aeiou'
    return str.split('')
              .map(
                letter => [...vowels].includes(letter) ? letter.toUpperCase() :
                          [...vowels.toUpperCase()].includes(letter) ? letter.toLowerCase() :
                          letter
                  )
              .join('')
}
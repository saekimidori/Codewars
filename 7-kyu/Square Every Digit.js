// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = num => {
    // receives integer
    // return every digit squared, concatenated
    
    // convert num to str, split, convert back to int
    const digitsSquared = (num + '').split('').map(str => +str)
                          // Math.pow each digit, join
                          .map(digit => Math.pow(digit, 2)).join('')
    // return as int
    return +digitsSquared
}
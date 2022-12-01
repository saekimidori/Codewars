// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// Let's assume that all numbers in the input will be integer values.

const sumDigits = number => {
    // takes an integer
    // return sum of digits in absolute value
    // 99 --> 18
    //-32 --> 5
    
    // convert num to Math.abs, toString, split, convert back to num, reduce
    const digits = Math.abs(number).toString().split('').map(el => +el)
    return digits.reduce((a, c) => a + c, 0)
}
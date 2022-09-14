// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = num => num.toString().split('').reverse().map(el => el - 0)

// You received an array with two strings. Create a function that will return their product as a string.

const arrMultiply = arr => arr.reduce((a, c) => `${+a * +c}`)
// Create a method all which takes two params:
// a sequence
// a function (function pointer in C)

// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

const all = (arr, func) => arr.length < 1 ? true : [...arr].every(el => func(el))
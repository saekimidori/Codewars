// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

const solution = value => `Value is ${value.toString().padStart(5, '0')}`
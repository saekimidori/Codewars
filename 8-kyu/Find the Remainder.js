// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

const remainder = (n, m) => {
  
    const higherValue = Math.max(n, m)
    const lowerValue = Math.min(n, m)
    
    return higherValue % lowerValue
}
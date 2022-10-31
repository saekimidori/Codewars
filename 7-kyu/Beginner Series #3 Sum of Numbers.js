// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

const getSum = (a, b) => {
    // takes two integers, +/-, unordered
    // sum all int b/t them including a,b
    // return the sum
    // if nums are == return a or b
    
    // find smaller, larger of a and b
    const maxVal = Math.max(a, b)
    const minVal = Math.min(a, b)
    // define variable sum starting at lower int
    let sum = minVal
    // for loop up to and including larger int
    for (i = minVal+1; i <= maxVal; i++) {
      sum += i
    }
    
    return sum
}
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = array => {
    // takes an arr of nums
    // return str => sum of nums is 'odd' or 'even'
    // if arr is empty => 0
    
    // reduce arr
    const sum = array.reduce((a, c) => a + c, 0)
    // sum % 2 === 0 => even : odd
    return sum % 2 === 0 ? 'even' : 'odd'
}
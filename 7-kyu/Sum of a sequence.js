// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

const sequenceSum = (begin, end, step) => {
    // takes 3 nums
    // return sum of nums beginning to end in steps
    // 2,6,2 --> 12 (2 + 4 + 6)
    
    // declare sum variable
    let sum = 0
    // for loop => i = begin, b <= end, i+=step
    for (i = begin; i <= end; i+=step) {
      sum += i
    }
    return sum
}
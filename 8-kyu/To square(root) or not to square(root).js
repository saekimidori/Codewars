// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

const squareOrSquareRoot = array => {
    const sqrt = int => +Math.sqrt(int).toFixed(0)
    return array.map(
      num => sqrt(num) * sqrt(num) === num ? sqrt(num) : Math.pow(num, 2)
    )
}
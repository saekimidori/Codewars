// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

const findNextSquare = sq => {
    // takes in positive int
    // Return the next square if sq is a perfect square, -1 otherwise
    
    // Math.sqrt(sq) === int ? Math.pow(sq+1, 2) : -1
    const sqrt = Math.sqrt(sq)
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1
}
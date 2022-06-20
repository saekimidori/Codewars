// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(num => Math.sign(num) === -1 ? Math.abs(num) : Number(-num))
}
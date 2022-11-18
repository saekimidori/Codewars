// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.
// If the average length is not an integer, use Math.round().
// The input array's length > 1

const averageLength = arr => { 
    // receives arr of strings of same letter type
    // return new arr with elements of strings in average length of all strings
    
    // add total length of each element in arr and divide by total array length
    // if avg is not int, Math.round
    const avgLength = Math.round((arr.map(el => el.length).reduce((a, c) => a + c, 0))/arr.length)
    // map arr, repeat el(avgLength)
    return arr.map(el => el.slice(0, 1).repeat(avgLength))
}
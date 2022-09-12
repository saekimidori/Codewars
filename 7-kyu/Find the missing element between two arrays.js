// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

const findMissing = (arr1, arr2) => {
    arr1.sort()
    arr2.sort()
    return arr1.find((el, index) => arr2[index] !== el)
}
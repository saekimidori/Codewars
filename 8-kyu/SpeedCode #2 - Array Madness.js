// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

const arrayMadness = (arr1, arr2) => {
    const arr1Squared = arr1.map(num => Math.pow(num, 2))
    const arr2Cubed = arr2.map(num => Math.pow(num, 3))
    
    const sumOfArray = array => array.reduce((a, c) => a + c, 0)
    
    return sumOfArray(arr1Squared) > sumOfArray(arr2Cubed)
}
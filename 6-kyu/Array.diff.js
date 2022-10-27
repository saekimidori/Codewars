// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// If a value is present in b, all of its occurrences must be removed from the other

const arrayDiff = (arrA, arrB) => {
    // receives two arrays
    // return arr with all nums from arr b removed from arr a
    
    // filter arr a w/o nums that are in arr b
    return arrA.filter(num => !arrB.includes(num))
}
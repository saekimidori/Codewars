// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

const gimme = triplet => {
    // receives arr of 3 nums
    // return idx of num that lies b/t other nums (ordered)
    
    // copy original arr to new variable
    const originalArr = [...triplet]
    // sort arr
    triplet.sort((a, b) => a - b)
    // find value of middle idx in sorted arr
    const middleNum = triplet[1]
    // return idx of value in original arr
    return originalArr.indexOf(middleNum)
}
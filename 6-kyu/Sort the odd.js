// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

const sortArray = array => {
    // takes arr of nums
    // return arr w/ odd nums in asc order, even nums stay in pos
    
    // new arr = filter array % 2 === 1 || -1, sort
    const isOdd = n => n % 2 === 1 || n % 2 === -1
    const sortedOdds = array.filter(num => isOdd(num)).sort((a, b) => a - b)
    // map array => el is odd ? replace string el w/ sorted arr.shift()
    const arranged = array.map(el => isOdd(el) ? el.toString().replace(el, sortedOdds.shift()) : el)
    return arranged.map(el => +el)
}
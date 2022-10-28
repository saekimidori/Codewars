// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = n => {
    // takes positive integers
    // return digits in descending order
    
    // convert int to str
    n = n + ''
    // split str, sort descending, join
    const intSorted = n.split('').sort((a, b) => b - a).join('')
    
    // convert back to int
    return +intSorted
}
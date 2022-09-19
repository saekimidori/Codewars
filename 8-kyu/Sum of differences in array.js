// Your task is to sum the differences between consecutive pairs in the array in descending order.

const sumOfDifferences = arr => {
    let difOfPairs = []
    
    arr.sort((a, b) => b - a)
       .forEach((num, idx) => difOfPairs.push(num - arr[idx + 1]))
    
    return difOfPairs.filter(el => +el)
                     .reduce((acc, cur) => acc + cur, 0)
}
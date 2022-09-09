// Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

const filterHomogenous = arrays => {
  
    let filteredArr = []
    
    for (const array of arrays) {
      const checkElementType = el => typeof array[0] === typeof el
    
      array.length > 0 && array.every(checkElementType) ? 
        filteredArr.push(array) : filteredArr
    }
    
    return filteredArr
}
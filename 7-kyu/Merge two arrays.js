// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

const mergeArrays = (arr1, arr2) => {
    const longestArr = arr1.length > arr2.length ? arr1.length : arr2.length
    let mergedArr = []
    
    for (i = 0; i < longestArr; i ++) {
      mergedArr.push(arr1[i], arr2[i])
    }
    
    return mergedArr.filter(el => el != undefined)
}
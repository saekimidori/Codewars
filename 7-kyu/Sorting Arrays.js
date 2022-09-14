// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

const sortArray = (arr1, arr2) => {
    const beginningLetter = arr1.map(word => word.charCodeAt(0))
    let sortedArr = []
    
    for (let charCode of beginningLetter) {
        sortedArr.push(
          arr2.find(animal => animal.charCodeAt(0) === charCode)
        )      
    }
    
    return sortedArr
}
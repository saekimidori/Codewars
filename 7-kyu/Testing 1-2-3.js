// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

const number = array => {
    // receives arr of strings
    // return each value prepended by number starting at 1
    // ['a', 'b', 'c'] => ['1: a', '2: b'. '3: c']
    
    // if arr is empty, return []
    if (!array.length)
      return array
    let newArr = []
    // set counter for line and increment for each value
    let line = 1
    // loop thru array => `${line}: ${value}`
    for (const val of array) {
      newArr.push(`${line}: ${val}`)
      line++
    }
    return newArr
}
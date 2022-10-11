// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = str => {
    let counter = 0
    let letters = str.split('')
    let mumboJumbo = []
    
    for (let char of letters) {
      mumboJumbo.push(`${char.toUpperCase()}${char.toLowerCase().repeat(counter)}`)
      counter++
    }
    
    return mumboJumbo.join('-')
}
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

const isIsogram = str => {
    let arr = []
    str.toLowerCase()
       .split('')
       .forEach(el => {
                   if (!arr.includes(el)) 
                      arr.push(el)
                })
    return str.length === arr.length
}
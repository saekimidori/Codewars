// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = str => {
    // receives string
    // return string with only first word entries
    // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
    // => "alpha beta gamma delta alpha beta gamma delta"
  
    // split str
    const splitStr = str.split(' ')
    // filter, compare index with next index => if === only return first occurring el, join
    return splitStr.filter((word, i) => splitStr[i] !== splitStr[i+1]).join(' ')
}
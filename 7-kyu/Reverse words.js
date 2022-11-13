// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

const reverseWords = str => {
    // takes str
    // return words reversed, spaces retained
    
    // split str by words ' '
    const split = str.split(' ')
    // map => split words by letter '', reverse, join '' => join words ' '
    return split.map(word => word.split('').reverse().join('')).join(' ')
}
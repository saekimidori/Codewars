// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

const longestWord = stringOfWords => {
    const splitStr = stringOfWords.split(' ')
    const wordLength = splitStr.map(word => word.length)
    const index = wordLength.lastIndexOf(Math.max(...wordLength))
    return splitStr[index]  
}
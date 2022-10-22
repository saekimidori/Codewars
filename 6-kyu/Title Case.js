// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

function titleCase(title, minorWords) {
    // takes in str for title and str of minor words
    // minorWords may be undefined
    // return str; first letter capitalized except minor words
    
    if (title === '')
      return title
    // lowercase both title and minor words
    // split title and minor words ' ' into arr
    title = title.toLowerCase().split(' ')
    minorWords = minorWords !== undefined ? minorWords.toLowerCase().split(' ') : ''
  
    // map title arr; index 0 of each word uppercased, unless they include minor words, joined ' '
    return title.map((word, idx) => 
                      (minorWords.includes(word)) && (idx !== 0) ? word : 
                      word[0].toUpperCase() + word.slice(1))
                      .join(' ')
}
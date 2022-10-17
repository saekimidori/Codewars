// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    // takes in -/_ strings
    // returns str in camel case; first word is capitalized only if original was
    
    if (str.length < 1)
      return str
    // split - || _
    if (str.includes('-'))
      str = str.split('-')
    if (str.includes('_'))
      str = str.split('_')
    
    // map => 1st word stays the same, rest Camel case, join ''
    let camelCase = str.map(
      word => str.indexOf(word) > 0 ? word[0].toUpperCase() + word.slice(1) : word)
      .join('')
    
    return camelCase
}
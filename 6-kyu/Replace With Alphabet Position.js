// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

const alphabetPosition = text => {
    // takes a str
    // return each letter w/ its pos in alphabet (space b/t) as str
    // if not a letter, do not return it
    
    // define alphs  
    const alphs = 'abcdefghijklmnopqrstuvwxyz'
    
    // split str, map, return pos of alph, join with ' '  
    return text.toLowerCase()
               .split('')
               .filter(el => [...alphs].includes(el))
               .map(char => [...alphs].indexOf(char)+1).join(' ')
}
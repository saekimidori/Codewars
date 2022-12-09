// Given a string str, reverse it and omit all non-alphabetic characters.

const reverseLetter = str => {
    // takes a string with lowercase letters, digits & symbols
    // return str reversed, with non-alphabetic chars removed
    // "ultr53o?n" => "nortlu"
    
    // define alphs, filter str => !include alphs, split, reverse, join
    const alphs = 'abcdefghijklmnopqrstuvwxyz'
    return str.split('').filter(char => [...alphs].includes(char)).reverse().join('')
}
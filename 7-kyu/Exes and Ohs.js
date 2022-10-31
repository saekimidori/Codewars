// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const XO = str => {
    // receives str of any char, case sensitive
    // return boolean if x and o count is the same
    // if no x or o in str, return true
    
    // toLowerCase, split, filter => x, o, compare lengths
    str = str.toLowerCase().split('')
    const x = str.filter(char => char === 'x')
    const o = str.filter(char => char === 'o')
    return x.length === o.length
}
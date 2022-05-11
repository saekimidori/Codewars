// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

function solution(a, b){
    let str = ''
    if (a.length < b.length) {
        str = a + b + a
    } else {
        str = b + a + b
    }
    return str
}

solution('45', '1')
solution('13', '200')
solution('Soon', 'Me')
solution('U', 'False')
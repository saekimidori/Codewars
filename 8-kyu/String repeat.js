// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
    let repeatedS = ''
    for (i = 0; i < n; i++) {
      repeatedS += s
    }
    return repeatedS
}
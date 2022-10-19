// You will be given a number and you will need to return it as a string in Expanded Form. For example:

const expandedForm = num => {
    // receives num
    // return str in expanded form
    // e.g. 42 => '40 + 2'
    
    // turn num into arr
    const numSplit = String(num).split('')
    // declare empty arr
    let arr = []
    // for each digit > 0, push into arr + 0 repeat num.length - (indexOf digit + 1)
    numSplit.forEach((digit, idx) => digit > 0 ? 
                     arr.push(digit + '0'.repeat(numSplit.length - (idx+1))) : digit)
    // join ' + '
    return arr.join(' + ')
}

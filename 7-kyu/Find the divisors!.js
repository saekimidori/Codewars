// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

const divisors = integer => {
    // takes an integer
    // return array of all integer's divisors > 1 ascending
    // if integer is prime, return str => '(integer) is prime'
    
    // create new arr, push i if Number.isInteger(integer/i)
    let divisors = []
    // for loop => i = 2 < integer
    for (i = 2; i < integer; i++) {
      if (Number.isInteger(integer/i))
        divisors.push(i)
    }
    // if new arr is empty, it is a prime => return str
    return divisors.length === 0 ? `${integer} is prime` : divisors
}
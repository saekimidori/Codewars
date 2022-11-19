// Count the number of divisors of a positive integer n.

const getDivisorsCnt = n => {
    // receives positive integer
    // return num of divisors
    // 4 // 3 (1, 2, 4)
    
    // variable to count divisors
    let divisors = 0
    // for loop => i = 1; i <= n
    for (i = 1; i <= n; i++) {
      // if n/i is integer, += 1 num of divisors
      if (Number.isInteger(n/i))
        divisors += 1
    }
    return divisors
}
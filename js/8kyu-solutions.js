// If you can't sleep, just count sheep!!
var countSheep = function (num){
    //your code here
    let count = ''
    for (i = 1; i <= num; i++) {
      count += i + ' sheep...'
    }
    return count
  }



  // Will you make it?
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (fuelLeft * mpg >= distanceToPump) {
      return true
    } else {
      return false
    }
  };



  // Is it even?
  function testEven(n) {
    //Your awesome code here!
  if (n % 2 === 0) {
    return true
  } else {
    return false
  }
}



// Rock Paper Scissors!
const rps = (p1, p2) => {
    if ( (p1 === 'scissors' && p2 === 'paper') ||
          (p1 === 'rock' && p2 === 'scissors') ||
          (p1 === 'paper' && p2 === 'rock') ) {
      return 'Player 1 won!'
    } else if ( (p2 === 'scissors' && p1 === 'paper') ||
                (p2 === 'rock' && p1 === 'scissors') ||
                (p2 === 'paper' && p1 === 'rock') ) {
      return 'Player 2 won!'
    } else {
      return 'Draw!'
    }
  };



  // Double Char
  function doubleChar(str) {
    // Your code here
    let doubled = ''
    for (i = 0; i < str.length; i++) {
      doubled += str[i] + str[i]
    }
    return doubled
  }



  // Function 3 - multiplying two numbers
  // Write here your multiply-function
function multiply(n1, n2) {
    return n1 * n2
  }



  // Find the first non-consecutive number
  function firstNonConsecutive (arr) {
    //P: take in an array of numbers
    //R: null if the whole array is consecutive
    //E:
    //P: find the first element in the array that is not consecutive
    // go through the array and check if the next number is exactly 1 above the last number
    for (i = 0; i < arr.length-1; i++) {
      if (arr[i + 1] !== arr[i] + 1) {
        return arr[i + 1]
      } 
    }
    return null
  }



  // Beginner - Lost Without a Map
  function maps(x){
    //P: take in an array of integers (x)
    //R: a new array with each value doubled
    let doubled = x.map(x => x*2)
    return doubled
    //E:
    //P: 
  }



  // Convert a string to an array
  function stringToArray(string){
    //P: string of words
    
    let array = string.split(' ')
    
    //R: array of words
    return array
    //E: 
    //P: get a string of words, split it and put it in an array
    // code code code
  
  }



  // Sentence Smash
  function smash (words) {
    return words.join(' ')
 };



 // Pillars
 function pillars(num_pill, dist, width) {
  if (num_pill > 1) {
    return ((num_pill-2)*width) + ((dist*100)*(num_pill-1))
  } else {
    return 0
  }
}



// Count Odd Numbers below n
function oddCount(n){
  return Math.floor(n/2)
}



// Powers of 2
function powersOfTwo(n){
  let arr = []
  for (i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i))
  }
  return arr
}



// Is the date today
function isToday(date) {
  let today = new Date()
  if (date.getDate() === today.getDate() &&
     date.getMonth() === today.getMonth() &&
     date.getFullYear() === today.getFullYear()) {
      return true
      } else {
        return false
      }
}



// USD => CNY
function usdcny(usd) {
  let yuan = usd * 6.75
  return `${yuan.toFixed(2)} Chinese Yuan`
}
usdcny(15)
usdcny(465)



// Opposites Attract
function lovefunc(flower1, flower2){
  // moment of truth
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true
  } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return true
  } else {
    return false
  }
}



// Multiply
function multiply(a, b){
  return a * b
}
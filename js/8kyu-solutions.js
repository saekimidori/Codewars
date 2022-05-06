// Remove String Spaces
function noSpace(x){
  let newStr = x.split(' ')
  return newStr.join('')
}



// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let arr = []
  if (input === null || input.length < 1) {
    return arr
  } else {
    let count = input.filter(n => n > 0).length
    let sum = input.filter(n => n < 0).reduce((a,c) => a + c, 0)
    arr.push(count, sum)
    return arr
  }
}



// Plural
function plural(n) {
  if (n === 1) {
    return false
  } else {
    return true
  }
}



// Find Multiples of a Number
function findMultiples(integer, limit) {
  let arr = []
  for (i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i)    
    }
  }
  return arr
}



// Find Maximum and Minimum Values of a List
function min(list) {
  return Math.min(...list)
}

function max(list) {
    return Math.max(...list)
}



// Stringy Strings
function stringy(size) {
  let str = ''
  for (i = 0; i < size; i++) {
    if (i % 2 === 0) {
      str += 1    
    } else {
      str += 0
    }
  }
  return str
}



// If you can't sleep, just count sheep!!
var countSheep = function (num){
  let count = ''
  for (i = 1; i <= num; i++) {
    count += i + ' sheep...'
  }
  return count
}



// Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true
  } else {
    return false
  }
};



// Is it even?
function testEven(n) {
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
  let doubled = ''
  for (i = 0; i < str.length; i++) {
    doubled += str[i] + str[i]
  }
  return doubled
}



// Function 3 - multiplying two numbers
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
// Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}



// Fundamentals: Return
function add(a,b){
  return a+b
}

function divide(a,b){
  return a/b
}

function multiply(a,b){
  return a*b
}

function mod(a,b){
  return a%b
}
 
function exponent(a,b){
  return Math.pow(a,b)
}
  
function subt(a,b){
  return a-b
}



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




// Convert a string to an array




// Sentence Smash




// Pillars




// Count Odd Numbers below n




// Powers of 2




// Is the date today




// USD => CNY




// Opposites Attract




// Multiply


function solution(a, b){
  let str = ''
  if (a.length < b.length) {
      str = a + b + a
  } else {
      str = b + a + b
  }
  console.log(str)
}

solution('45', '1')
solution('13', '200')
solution('Soon', 'Me')
solution('U', 'False')

/*
// Check same case
function sameCase(a, b){
  //check if both chars are lowercase
  if ( ( (a == a.toLowerCase()) && (b == b.toLowerCase()) ) ||
       ( (a == a.toUpperCase()) && (b == b.toUpperCase()) )) {
    console.log(1)
  } else if ( ( (a == a.toLowerCase()) && (b == b.toUpperCase()) ) ||
              ( (a == a.toUpperCase()) && (b == b.toLowerCase()) )) {
    console.log(2)
  } else {
    console.log(0)
  }
  //check if both chars are uppercase
  //check if either char is letter
}
sameCase('C', 'b')
console.log(':'.toLowerCase())
*/



// To square(root) or not to square(root)
// function squareOrSquareRoot(array) {
//   let newArr = []
//   array.forEach(num => Math.sqrt(num))  
//   if (Math.sqrt(num) === true) {
//     newArr.push(num)
//   } else {
//     newArr.push(Math.sqrt(num))
//   }
//   console.log(newArr)
// }
  
// squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ])
// let arr = [ 4, 3, 9, 7, 2, 1 ]
// let newArr = arr.forEach(num => Math.sqrt(num))
// console.log(newArr)


// function binToDec(bin){
//   let num = Number(bin)
//   num = num / 100
// }
// binToDec('75')


// function digitize(n) {
//   let nums = n
//   let reverse = nums.reverse()
//   console.log(nums)
// }
// // console.log(digitize(35231))
// // console.log(digitize(0))
// digitize(35231)
// digitize(0)


// function noSpace(x){
//   //separate
//   let newStr = x.split(' ')
//   //join
//   return newStr.join('')
//   // return x.trim(' ')
// }
// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')
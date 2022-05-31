// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function drawStairs(n) {
  let stair = 'I'
  let space = ''
  for (i = 1; i < n; i++) {
    space += ' '
    stair += '\n' + space + 'I'
  }
  return stair
}
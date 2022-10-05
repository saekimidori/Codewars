// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z

// and print out the string without the use of the Polish letters.

const fromPolish = alph => {
    switch (alph) {
      case 'ą': return 'a'
      break
      case 'ć': return 'c'
      break
      case 'ę': return 'e'
      break
      case 'ł': return 'l'
      break
      case 'ń': return 'n'
      break
      case 'ó': return 'o'
      break
      case 'ś': return 's'
      break
      case 'ź': return 'z'
      break
      case 'ż': return 'z'
      break
      default: alph
    }
}

const correctPolishLetters = string =>
string.split('').map(char => fromPolish(char) || char).join('')
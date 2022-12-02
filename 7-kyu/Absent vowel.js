// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.

// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

const absentVowel = str => {
    // takes a string
    // return index of missing vowel => [a,e,i,o,u]
    // "Bb Smith sent us six neatly arranged range bicycles"  =>  3; missing: "o"
    
    // define vowels
    const vowels = 'aeiou'
    // iterate thru vowels => if str !includes(vowel), return vowels.indexOf(vowel)
    for (const vowel of vowels) {
      if (!str.includes(vowel))
        return vowels.indexOf(vowel)
    }
}
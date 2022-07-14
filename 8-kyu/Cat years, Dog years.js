// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

const humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15 // +4 for ages 3+
    let dogYears = 15 // +5 for ages 3+
    const twoYearsOld = 24 // 15 + 9
    
    if (humanYears > 2) {
      catYears = twoYearsOld + (humanYears - 2) * 4
      dogYears = twoYearsOld + (humanYears - 2) * 5
      
    } else if (humanYears > 1) {
      catYears = twoYearsOld
      dogYears = twoYearsOld
    }
           
    return [humanYears, catYears, dogYears]
}
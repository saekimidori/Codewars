// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s){
    return (s[0].reduce((a, c) => a + c) +
            s[1].reduce((a, c) => a + c) +
            s[2].reduce((a, c) => a + c) +
            s[3].reduce((a, c) => a + c) +
            s[4].reduce((a, c) => a + c) +
            s[5].reduce((a, c) => a + c) +
            s[6].reduce((a, c) => a + c)) * 20
}
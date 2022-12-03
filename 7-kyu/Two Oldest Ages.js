const twoOldestAges = ages =>
  // receives array of nums
  // return the two oldest/oldest ages within the array of ages passed in.
  
  // sort, return last two indices
  ages.sort((a, b) => a - b).slice(-2)
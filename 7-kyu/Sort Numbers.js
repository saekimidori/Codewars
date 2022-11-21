// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

const solution = nums =>
  // receives arr of nums, or empty arr/null
  // return arr sorted, or an empty arr
  
  // sort
  nums === null || !nums.length ? [] : nums.sort((a, b) => a -b)
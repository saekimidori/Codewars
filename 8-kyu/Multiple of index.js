// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

const multipleOfIndex = array =>
  array.filter((num, index) => Number.isInteger(num/index))
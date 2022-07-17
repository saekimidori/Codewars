// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

const strCount = (str, letter) => {
    let i = 0
    str.split('').forEach(ltr => ltr === letter ? i += 1 : 0)
    return i
}
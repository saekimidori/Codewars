// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

const multiTable = number => {
    let table = ''
    for (i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}`
      if (i < 10)
        table += '\n'
    }
    return table
}
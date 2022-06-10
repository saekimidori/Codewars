// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let totalSheep = 0
    arrayOfSheep.forEach(e => e ? totalSheep += 1 : 0)
    return totalSheep
}
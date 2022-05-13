// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    let splitStr = str.split(' ')
    let reversedName = `${splitStr[1]} ${splitStr[0]}`
    console.log(reversedName)
}
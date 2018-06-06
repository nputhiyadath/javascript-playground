/**
 * Using lodash, os, fs from nodejs
 */

const fs = require('fs')
const os = require('os')
const lodash = require('lodash')
const pipe = require('lodash/fp/pipe')
const compose = require('lodash/fp/compose')

//Exploring FS module in Node

fs.copyFile('E:\\DroolsDump\\Testing\\Source.txt', 'E:\\DroolsDump\\Testing\\Destination.txt', (err) => {
    if (err) throw err
    console.log('source.txt was copied to destination.txt')
});


//Show OS options using node os module

console.log(`This machine has total ${os.totalmem()} memory`)
console.log(`This machine has version ${os.release()} OS`)
console.log(`This machine has ${os.cpus().length} CPUS`)
console.log(`This is a ${os.type()} ${os.platform()} machine`)

//Lodash example
const myArray = [10, 20, 30]
const myFunction = x => x * 2
//Lodash way
console.log(lodash.map(myArray, myFunction)) // [20, 40, 60]

//traditional JS way
const newArray = myArray.map(value => {
    return myFunction(value)
})
console.log(newArray)


//Another lodash example
const myFunction1 = x => x + 1

//Traditional JS
console.log(myFunction1(myFunction(2))) //same as pipe
console.log(myFunction(myFunction1(2))) //same as composition

// IN Lodash: FUNCTIONS CALLED LEFT TO RIGHT -> PIPING
console.log(pipe([myFunction, myFunction1])(2)) // (2 * 2) + 1 = 5

// IN Lodash: FUNCTIONS CALLED RIGHT TO LEFT -> COMPOSING
console.log(compose([myFunction, myFunction1])(2)) // (2 + 1) * 2 = 6
/**
 * Playing with IIFE, functions, classes and promises
 */

//IIFE -> Immediately invoked function execution
(function () {
    console.log('I am an IIFE')
})()

//Simple promise example
const promiseNumbers = Promise.all([1, 2, 3])

promiseNumbers.then(num => {
    console.log(num)
}) //immediate


//Class example with object creation

class Person {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
    }

    getFullName() {
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}

const nidhish = new Person('Nidhish', 'Thavarul', 'Puthiyadath')
console.log(nidhish.getFullName())


//Object creation using Function

function PersonCreator(first, middle, last) {
    this.first = first
    this.middle = middle
    this.last = last
}

PersonCreator.prototype.getFullName = function () {
    return `${this.first} ${this.middle} ${this.last}`
}

const vrishabh = new PersonCreator('Vrishabh', '', 'Nambiar')
console.log(vrishabh.getFullName())


//closure
const add10Function = (i) => {
    const myFunction1 = () => i + 10
    return myFunction1
}

let result = add10Function(10).apply()
console.log(result)
//OR
let myFunction = add10Function(20)
const output = myFunction()
console.log(output)
//OR
let myBindFunc = add10Function(30).bind()
let myResult = myBindFunc()
console.log(myResult)


//Call back function example
const callBacker = (name, fn) => {
    let message = `Called function with param value as ${name}`
    fn(message)
}

callBacker('PARAM', (param) => {
    console.log(param)
})
// Show how setTimeout works


const namerFunction = (name) => {
    console.log(name)
}

const callNameAfterSomeTime = (name, time) => {
    setTimeout(() => {
        namerFunction(name)
    }, time)
}


//Promise with setTimeout
const sleepFunction = (time) => {
    return new Promise((resolve => {
        setTimeout(resolve, time)
    }))
}

/**
 * Exploring async await
 */

function resolveAfterFewSeconds(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`This was called after ${time / 1000} seconds`)
        }, time)
    })
}

//Using async await
async function asyncCall(time) {
    console.log(`calling after ${time / 1000} seconds`)
    var result = await resolveAfterFewSeconds(time)
    console.log(result)
}

module.exports = {callNameAfterSomeTime, sleepFunction, asyncCall, resolveAfterFewSeconds}

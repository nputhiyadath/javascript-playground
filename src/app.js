const lib = require('./library')

lib.callNameAfterSomeTime('Nidhish', 2000)

lib.sleepFunction(5000).then(() => {
    console.log('slept for 5 seconds')
})

lib.asyncCall(3000)
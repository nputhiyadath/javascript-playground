const count = function () {

    let privateCounter = 0;

    function changeByValue(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeByValue(1);
        },
        decrement: function () {
            changeByValue(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
};

const counter = count();
console.log(counter);

console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
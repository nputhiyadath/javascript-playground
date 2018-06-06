export class TestArrowFunctions {
    private foo = '21'

    createObject() {
        console.log('Inside createObject: ', this.foo)
        return {
            foo: 42,
            bar: function () {
                console.log('Inside bar:', this.foo) //42 because here this is dynamic
            },
        };
    }

    createObjectWithArrow = () => {
        console.log('Inside createObject in arrow: ', this.foo);
        return {
            foo: 42,
            bar: () => console.log('Inside bar in arrow: ', this.foo), //21 because this refers to the lexical this.
        };
    }
}

let tester = new TestArrowFunctions()
tester.createObject().bar()
tester.createObjectWithArrow().bar()

//Explain difference between regular and arrow functions

function createObject() {
    console.log('Inside function createObject: ', this.foo);
    return {
        foo: 42,
        bar: function () {
            console.log('Inside function bar: ', this.foo); //42 because here this is dynamic
        },
    };
}


function createObjectWithArrow() {
    console.log('Inside function createObject in arrow: ', this.foo);
    return {
        foo: 42,
        bar: () => console.log('Inside bar in arrow: ', this.foo), //21 because this is lexical.
    };
}

createObject.apply({foo: 21}).bar();
createObjectWithArrow.call({foo: 21}).bar(); //apply and call are interchangeable

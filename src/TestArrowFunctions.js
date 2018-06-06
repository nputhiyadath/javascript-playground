"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestArrowFunctions = /** @class */ (function () {
    function TestArrowFunctions() {
        var _this = this;
        this.foo = '21';
        this.createObjectWithArrow = function () {
            console.log('Inside createObject in arrow: ', _this.foo);
            return {
                foo: 42,
                bar: function () { return console.log('Inside bar in arrow: ', _this.foo); },
            };
        };
    }
    TestArrowFunctions.prototype.createObject = function () {
        console.log('Inside createObject: ', this.foo);
        return {
            foo: 42,
            bar: function () {
                console.log('Inside bar:', this.foo); //42 because here this is dynamic
            },
        };
    };
    return TestArrowFunctions;
}());
exports.TestArrowFunctions = TestArrowFunctions;
var tester = new TestArrowFunctions();
tester.createObject().bar();
tester.createObjectWithArrow().bar();
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
    var _this = this;
    console.log('Inside function createObject in arrow: ', this.foo);
    return {
        foo: 42,
        bar: function () { return console.log('Inside bar in arrow: ', _this.foo); },
    };
}
createObject.apply({ foo: 21 }).bar();
createObjectWithArrow.call({ foo: 21 }).bar(); //apply and call are interchangeable

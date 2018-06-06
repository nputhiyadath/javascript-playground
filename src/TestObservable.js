"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var TestObservable = /** @class */ (function () {
    function TestObservable() {
        var _this = this;
        this.subject = new rxjs_1.Subject();
        this.subjectObservable = this.subject.asObservable();
        this.test = function () {
            var subjectSubscription = _this.subjectObservable.subscribe(function (value) {
                console.log("Added new value " + value);
            }, function (error) { return console.log('Oops. Subscription ran into issue'); }, function () { return console.log('Completion of subject'); });
            _this.subject.next('A');
            _this.subject.next('B');
            _this.subject.next('C');
            _this.subject.next('D');
            _this.subject.next('E');
            _this.subject.next('F');
            _this.subject.complete();
            subjectSubscription.unsubscribe();
        };
    }
    return TestObservable;
}());
exports.TestObservable = TestObservable;
var tester = new TestObservable();
tester.test();

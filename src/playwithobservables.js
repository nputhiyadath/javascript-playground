const Rx = require('rxjs/Rx')

//Observables and their subscriptions
const observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000)
})

console.log('just before subscribe')
observable.subscribe(
    x => console.log('got value ' + x),
    err => console.error('something wrong occurred: ' + err),
    () => console.log('done')
)
console.log('just after subscribe')

//Subjects and observables
const subject = new Rx.Subject()
const subjectObservable = subject.asObservable()

const subjectSubscription = subjectObservable.distinct().subscribe(
    value => {
        console.log('Added new value')
        console.log(value)
    }, error => console.log('Oops. Subscription ran into issue'),
    () => console.log('Completion of subject')
)

subject.next('A')
subject.next('B')
subject.next('C')
subject.next('D')
subject.next('E')
subject.next('B')
subject.next('F')
subject.next('G')
subject.complete()
subject.next('H') //never added
subjectSubscription.unsubscribe();

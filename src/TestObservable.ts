import {Subject} from 'rxjs'

export class TestObservable {
    private subject = new Subject();
    private subjectObservable = this.subject.asObservable()

    test = () => {
        const subjectSubscription = this.subjectObservable.subscribe(
            value => {
                console.log(`Added new value ${value}`)
            }, error => console.log('Oops. Subscription ran into issue'),
            () => console.log('Completion of subject')
        )
        this.subject.next('A')
        this.subject.next('B')
        this.subject.next('C')
        this.subject.next('D')
        this.subject.next('E')
        this.subject.next('F')
        this.subject.complete()
        subjectSubscription.unsubscribe()
    }
}

const tester = new TestObservable();
tester.test()

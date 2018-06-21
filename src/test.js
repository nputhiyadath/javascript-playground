const lib = require('./library')
const expect = require('chai').expect
const should = require('chai').should()


describe('Sample Test', () => {

    describe('Test Using Expect', () =>
        it('Using Expect', () => {
            expect('hello').to.equal('hello')
        })
    )

    describe('Test Using Should', () =>
        //apparently has some issues on IE
        it('Using Should', () => {
            'hello'.should.equal('hello')
        })
    )
    
     describe('Test Library', () =>
         it('should run after 3 seconds', () =>
             lib.resolveAfterFewSeconds(3000).then((result) => {
                 expect(result).to.equal('This was called after 3 seconds') //using expect
                 result.should.equal('This was called after 3 seconds') //using should
             }).done
         )
     )
})

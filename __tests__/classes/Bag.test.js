const Bag = require('../../classes/Bag');
const { describe, it, test, expect, toBe, toEqual, toThrow } = require("@jest/globals");

let bag1

beforeEach(() => {
    bag1 = new Bag (25 ,2)
})
describe('Its a bag', ()=> {
    //Test that you can create an instance of the Bag class
    it('Creates an instance of the bag class', () => {
        let bag2 = new Bag(30, 3)
    })

    //Test that the weight and id have been assigned correctly. 
    it('Assigned weight correctly', () => {
        expect(bag1.weight).toBe(25)
    })

    it('Assigned id correctly', () => {
        expect(bag1.id).toBe(2)
    })

    // owner: The person assigned to a Bag. Initialized with a value of null.
    let owner = null; 

    //Verify you can get the initial owner using getOwner
    it('Verify Owner', () => {
        expect (bag1.getOwner()).toBe('John Doe')
    })

    // Create a test to update owner with a Person assigned to a Bag using assignOwner(). 
    //You won’t be able to assign a person until completing the next section.
    it('update owner', () => {
        expect (bag1.assignOwner()).toBe('Mary Jane')
    })

})
const Bag = require("../../classes/Bag");
const {
  describe,
  it,
  test,
  expect,
  toBe,
  toEqual,
  toThrow,
} = require("@jest/globals");
const Person = require("../../classes/Person.js");

let bag1;

beforeEach(() => {
  bag1 = new Bag(25, 2);
});
describe("Its a bag", () => {
  //Test that you can create an instance of the Bag class
  it("Creates an instance of the bag class", () => {
    let bag2 = new Bag(30, 3);
    expect(bag2 instanceof Bag).toBe(true);
  });

  //Test that the weight and id have been assigned correctly.
  it("Assigned weight correctly", () => {
    expect(bag1.weight).toBe(25);
  });

  it("Assigned id correctly", () => {
    expect(bag1.id).toBe(2);
  });

  it("inital owner is null", () => {
    let owner = bag1.getOwner();
    expect(owner).toBe(null);
  });

  // Create a test to update owner with a Person assigned to a Bag using assignOwner().
  //You won’t be able to assign a person until completing the next section.
  it("update owner", () => {
    let testPerson = new Person("John", "Germany");
    bag1.assignOwner(testPerson);
    let owner = bag1.getOwner();
    expect(owner).toBe(testPerson);
  });
});

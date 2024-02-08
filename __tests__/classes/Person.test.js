const Person = require("../../classes/Person.js");

describe("The class Person", () => {

    test("initalizes the name and destination properties correctly", () => {
        let t1 = new Person("John", "New York");
        expect(t1.name).toBe("John");
        expect(t1.destination).toBe("New York");
    })

    test("initializes bag as an empty variable", () => {
        let t1 = new Person("John", "New York");
        expect(t1.getBags()).toEqual([])
    })

    test("addBag method adds a bag to array", () => {
        let t1 = new Person("John", "New York");
        expect(t1.addBag("Gucci")).toEqual(["Gucci"])
    })
})
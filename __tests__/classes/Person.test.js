const Person = require("../../classes/Person.js");

describe("The class Person", () => {

    test("initalizes the name and destination properties correctly", () => {
        let t1 = new Person("John", "New York");
        expect(t1.name).toBe("John");
        expect(location).toBe("New York");
    })


})
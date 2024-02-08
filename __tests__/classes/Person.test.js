const Person = require("../../classes/Person.js");

describe("The class Person", () => {
  it("Creates an instance of the person class", () => {
    let t1 = new Person("John", "New York");
    expect(t1 instanceof Person).toBe(true);
  });

  test("initalizes the name and destination properties correctly", () => {
    let t1 = new Person("John", "New York");
    expect(t1.name).toBe("John");
    expect(t1.destination).toBe("New York");
  });

  test("initializes bag as an empty variable", () => {
    let t1 = new Person("John", "New York");
    expect(t1.getBags()).toEqual([]);
  });

  test("addBag method adds a bag to array", () => {
    let t1 = new Person("John", "New York");
    t1.addBag("Gucci");
    expect(t1.getBags()).toEqual(["Gucci"]);
  });
});

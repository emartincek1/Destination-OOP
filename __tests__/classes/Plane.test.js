const Person = require("../../classes/Person.js");
const Plane = require("../../classes/Plane.js");

describe("Plane Tests", () => {
  it("Creates an instance of the plane class", () => {
    let testPlane = new Plane("Delta", "New York");
    expect(testPlane instanceof Plane).toBe(true);
  });

  test("plane is initalized correctly", () => {
    let testPlane = new Plane("Delta", "New York");
    expect(testPlane.company).toBe("Delta");
    expect(testPlane.origin).toBe("JFK");
    expect(testPlane.destination).toBe("New York");
    let passengers = testPlane.getPassengers();
    expect(passengers).toEqual([]);
  });

  test("addPassenger adds passenger correctly", () => {
    let testPlane = new Plane("Delta", "New York");
    let testPerson = new Person("John", "New York");
    testPlane.addPassenger(testPerson);
    let passengers = testPlane.getPassengers();
    expect(passengers).toEqual([{ name: "John", destination: "New York" }]);
  });

  test("getPassengers returns correct array of passengers", () => {
    let testPlane = new Plane("Delta", "New York");
    let testPerson = new Person("John", "New York");
    testPlane.addPassenger(testPerson);
    let passengers = testPlane.getPassengers();
    expect(passengers).toEqual([{ name: "John", destination: "New York" }]);
  });
});

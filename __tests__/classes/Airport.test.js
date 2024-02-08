const Airport = require("../../classes/Airport")
const Plane = require("../../classes/Plane")

describe("Airpot Tests", () => {
    //Test that name and planes are assigned to the correct value.
    it("Creates a name for the Aiport", () => {
      let testAirport = new Airport("Doggy Dog");
      expect(testAirport.name).toBe("Doggy Dog");
    });


    it("Verify planes are assigned correctly", () => {
        let testAirport = new Airport('Test Airport');
        let testPlane = new Plane('Delta','ATL');
        testAirport.addPlane(testPlane);
        let planes = testAirport.getPlanes();
        expect(planes).toEqual([{company: 'Delta', destination: "ATL", origin: "JFK"}]);
      });

    //Test that airportCode is the correct value
    it("Verify airportCode is the correct value", () => {
        expect(Airport.airportCode).toBe('JFK');
      });
    
    //Check that the planes array initializes as an empty array.
    it("Verify that the planes array initializes as an empty array.", () => {
        let testAirport = new Airport("Test Airport");
        let planes = testAirport.getPlanes();
        expect(planes).toEqual([]);
      });
})
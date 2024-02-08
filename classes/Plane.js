class Plane {
  #passengers;
  constructor(company, destination) {
    this.company = company;
    this.origin = "JFK";
    this.destination = destination;
    this.#passengers = [];
  }
  getPassengers() {
    return this.#passengers;
  }
  addPassenger(passenger) {
    this.#passengers.push(passenger);
  }
}

module.exports = Plane;

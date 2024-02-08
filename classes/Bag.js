class Bag {
  #owner;
  constructor(weight, id) {
    this.weight = weight;
    this.id = id;
    this.#owner = null;
  }
  //Returns the Person assigned to the bag.
  getOwner() {
    return this.#owner;
  }

  //Updates owner with a person assigned to a Bag.
  assignOwner(person) {
    this.#owner = person;
  }
}

module.exports = Bag;

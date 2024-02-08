class Person {
    #bag 
    constructor(name, destination){
        this.name = name;
        this.destination = destination;
        this.#bag = [];
    }

    addBag(bag){
        this.#bag.push(bag);
        return this.#bag
    }

    getBags(){
        return this.#bag
    }

}



module.exports = Person;
class Airport {
    //airportCode: A static property with the three letter code for the airport (e.g. JFK or LHR).
    static airportCode = "JFK";
    #planes;
    constructor(name){
        this.name = name;

        //planes: An array of Plane objects currently at the airport. Initializes as an empty array.
        this.#planes =[];
    }

    getPlanes(){
        return this.#planes;
    }

    addPlane(plane){
        this.#planes.push(plane);
    }
}


module.exports = Airport;
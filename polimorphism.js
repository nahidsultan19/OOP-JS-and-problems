class Player {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getPlayerDetails() {
        return `${this.#name} is ${this.#age} years old`;
    }

    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
}

class Cricketer extends Player {
    constructor(name, age, centuries) {
        super(name, age);
        this.centuries = centuries;
    }

    getPlayerDetails() {
        return `${this.getName()} এর বয়স  ${this.getAge()} বছর `;
    }
}

class Footballer extends Player {
    #goals
    constructor(name, age, goals) {
        super(name, age);
        this.#goals = goals;
    }
}

const crickerter = new Cricketer("Mashrafi", 29, 10);
console.log(crickerter.getPlayerDetails());
const footballer = new Footballer("Ronaldo", 30, 250);
console.log(footballer.getPlayerDetails());
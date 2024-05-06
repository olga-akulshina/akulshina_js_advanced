'use strict'

class Car {
    #make;
    #model;
    #_run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get #run() {
        return this.#_run;
    }

    set #run(newRun) {
        this.#_run = newRun;
    }

    info() {
        console.log(`Марка автомобиля: ${this.#make} , модель: ${this.#model} , пробег: ${this.#_run}`);
    }

    changeRun(newRun) {
        return newRun >= 0 ? (this.#run = newRun, true) : false;
    }
}

const testCar = new Car('Opel', 'Mokka', 2300);
testCar.info();
testCar.changeRun(1000);
testCar.info();



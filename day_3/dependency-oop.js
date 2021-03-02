class Car {
    checkWheel() {
        console.log("berjalan dengan 8 roda");
    }
}

class Motorcycle {
    checkWheel() {
        console.log("ada 2 roda");
    }
}

class Honda {
    constructor(type, brand, car, motorcycle) {
        this.type = type;
        this.brand =  brand;
        this.car = dependency.car;
        this.motorcycle = dependency.motorcycle;
        this.engine = dependency.engine ;
    }
}

const car = new Car();
const motorcycle = new Motorcycle();
const engine = new Engine();

const dependency = {car, motocycle, engine};

const mobilio = new Honda("Mobilio", car, dependency);

mobilio.car.checkWheel();
mobilio.motocycle.checkWheel();
mobilio.engine.checkEngine();
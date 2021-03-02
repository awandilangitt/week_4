//Parent Class / super class
class Engine {
    startEngine() {
        console.log(`mesin ${this.type} hidup bouss`);
    }
    stopEngine() {}
    horn() {}
}

//Child class / sub class
class Car extends Engine {
    horn() {}
}

// child class / sub class
class Toyota extends Car {
    constructor(type) {
        super();
        this.type = type;
    }
}

class Honda extends Car {
    constructor(type) {
        super();
        this.type = this.type
    }
}

class Daihatsu extends Car {
    constructor(type) {
        super();
        this.type = this.type
    }
}


const avanza = new Toyota("Avanza");

avanza.startEngine();

const mobilio = new Honda("mobilio");

mobilio.startEngine();

const xenia = new Daihatsu("Xenia");

xenia.startEngine();
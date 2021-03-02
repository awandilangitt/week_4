class Car {
    constructor() {
        this.brand = "Suzuki";
    }
    startEngine() {
        console.log("Mesin nyala");
    }
}

const car =new Car();

//Modifying atau overriding
car.brand = "Honda";
car.startEngine = function () {
    console.log("methodnya saya bajak");
}

console.log(car.brand);
car.startEngine();
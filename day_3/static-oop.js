class Car {
    //Static property
    static brand2 = "Honda";

    constructor () {
        //instance property
        this.brand =  "Toyota";
        this.type = "Honda";
    }
    //Instance Method
    startEngine(){
        console.log("mobil nyala mesin");
    }
    static getBrand2() {
        return Car.brand2;
    }
    stopEngine (){
        console.log( "mesin mati");
    }
}

const car = new Car();

console.log(car.brand2);
console.log(Car.getBrand2());
class WashingMachine {
    constructor(merek, warna, berat, bentuk, kecepatan) {
        this.brand = merek;
        this.weight = berat;
        this.form = "cylinder";
        this.color = warna;
        this.shape = bentuk;
        this.speed = "500rpm";
        this.speed2 = kecepatan;
    }
    start() {
        console.log (`mereknya ${this.brand} warnanya ${this.color} bobotnya ${this.weight} kg, bentuknya ${this.form}`);
    }
    changeColor() {
        console.log(`mereknya ${this.brand} warnanya jadi ${this.color}`);
    }
    changeForm() {
        console.log(`mereknya ${this.brand} dari bentuk ${this.form} jadi ${this.shape}`)
    }
    changeSpeed() {
        console.log(`mesin berjalan di perputaran ${this.speed} dinaikkan menjadi putaran ${this.speed2}` )
    }    
}


// const merek = "panasonic";
// const warna = "silver";
// const berat = "500";
// const bentuk = "kotak";
// const kecepatan = "1000rpm"

const mesincuci = new WashingMachine("panasonic", "silver", "500", "kotak", "1000rpm");

mesincuci.start();
mesincuci.changeColor();
mesincuci.changeSpeed();
mesincuci.changeForm();

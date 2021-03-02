class Mobil{
    constructor(mobil, mobil2) {
        //Inisiasi property dalam object class
        this.name= nama;
        this.weight= berat;
        this.modelmodel= model;
        this.color= warna;
    }
    start() {
        console.log(`${this.name} telah menyala ${this.color} telah menyala`);
    }
    drive() {
        console.log(`mobil ${this["name"]} siap dikemudikan`);
    }
    brake() {
        console.log("mobil telah di rem");
    }
    stop () {
        console.log("mobil berenti");
    }
}

const nama = "Honda Jazz";
const berat = "600";
const model = "mini car";
const warna = "hijau";

const mobil = new Mobil("Honda Jazz", "600", "mini car", "merah");
const mobil2 = new Mobil("Suzuki Satria", "100", "motor", "Pink");

mobil.start();
mobil2.drive();
// mobil.start = function () {
//     console.log("ini fungsi dengan replace baru");
// }

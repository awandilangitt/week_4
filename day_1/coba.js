// *100 derajat celcius = "air mendidih"
// *50 derajat celcius = "air hangat"
// *0 derajat celcius = "air beku"

for (let celcius =200; celcius > -2; celcius--) {

}
// Inisiasi function handler
function bilanganGenap(number){
    console.log(number + " bilangan genap");
}
function bilanganGanjil(number){
    console.log(number + " bilanganGanjil");
}

// function lampuMerah() {
//     console.log("kendaraan anda harus berhenti");
// }

// function lampuHijau() {
//     console.log("kendaraan anda harus jalan");
// }

// Registrasi sebuah event
eventEmitter.on("genap", bilanganGenap);
eventEmitter.on("ganjil", bilanganGanjil);


}
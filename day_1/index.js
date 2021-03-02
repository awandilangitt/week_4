const Event = require("events");

//Inisiasi sebuah varibael event
const eventEmitter = new Event();

// Inisiasi function handler
function airMendidih(suhu){
    console.log(suhu + " airMendidih");
}
function airHangat(suhu){
    console.log(suhu + " airHangat");
}
function airbeku(suhu){
    console.log(suhu + " airbeku");
}

//registrasi sebuah event
eventEmitter.on("mendidih", airMendidih);
eventEmitter.on("hangat", airHangat);
eventEmitter.on("beku", airbeku);

for (let celcius =200; celcius > -2; celcius--) {
    if (celcius ==100) {
         eventEmitter.emit("mendidih", celcius);
    } else if (celcius == 50) {
        eventEmitter.emit("hangat", celcius)
    } else if (celcius == 0) {
        eventEmitter.emit("beku", celcius)
    }
}

// Inisiasi function handler
// function bilanganGenap(number){
//     console.log(number + " bilangan genap");
// }
// function bilanganGanjil(number){
//     console.log(number + " bilanganGanjil");
// }

// // function lampuMerah() {
// //     console.log("kendaraan anda harus berhenti");
// // }

// // function lampuHijau() {
// //     console.log("kendaraan anda harus jalan");
// // }

// // Registrasi sebuah event
// eventEmitter.on("genap", bilanganGenap);
// eventEmitter.on("ganjil", bilanganGanjil);


// }
// // eventEmitter.on("lampuMerah", lampuMerah);
// // eventEmitter.on("lampuHijau", lampuHijau);

// // bikin trigger events 
// // eventEmitter.emit("lampuMerah");
// for (let index = 0; index <10; index++) {
//     if (index % 2 == 0) {
//         eventEmitter.emit("genap", index);
//         eventEmitter.emit("ganjil", index);
//     }

// *100 derajat celcius = "air mendidih"
// *50 derajat celcius = "air hangat"
// *0 derajat celcius = "air beku"


    // switch (celcius) {
    //     case 100:
    //         eventEmitter.emit("mendidih", celcius);
    //         break else if (celcius == 50);
    //         eventEmitter.emit("hangat", celcius);
    //     default:
    //         break;
   

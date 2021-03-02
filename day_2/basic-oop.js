const mobil = {
    name: "Toyota Avanza",
    weight: "800",
    model: "MPV",
    color: "putih",
    start:function(){
      console.log(`${this.name} telah menyala`);
    },
    drive:function(){
        console.log(`${this["model"]} siap dikemudikan`);
     },
    brake:function(){
        console.log("telah di rem");
     },
     stop:function(){
        console.log("telah berenti");
     },
};

  
  //manggil function
  mobil.name = "Honda Jazz";
  mobil.name = "Lamborghini"
  mobil.drive();
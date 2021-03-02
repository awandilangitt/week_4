//const menghitungLuasSegitiga = (a, t) => 0.5 * a * t;
//      return 0,5 * a * t;
// };

const menghitungLuasSegitiga = (a, t) => 0.5 * a * t;

const menghitungLuasPersegi = (s) =>  s * s;

const menghitungLuasPersegiPanjang = (p, l) => p * l;

const menghitungLuasLingkaran = (r) => 3.14 * r * r;

console.log(`luas segitiga ${menghitungLuasSegitiga(10, 10)}`);
console.log(`luas persegi ${menghitungLuasPersegi(10, 10)}`);
console.log(`luas persegi panjang ${menghitungLuasPersegiPanjang(10, 10)}`);
console.log(`luas lingkaran ${menghitungLuasLingkaran(10, 10)}`);
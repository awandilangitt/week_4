class Bangunan {
    luasSegitiga(a, t) {
        return 0.5 * a * t;
    }
    luasPersegi(s) {
        return s * s;
    }
    luasPersegiPanjang (p, l) {
        return p * l;
    }
    luasLingkaran (r) {
        return 3.14 * r * r;
    }
}

const test = () => {
    console.log("ini sebuah function dari bangunan");
};


//create new instance
module.exports = [Object.freeze(new Bangunan()), test];

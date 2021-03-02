class Bank {
        saldo = 10000;
        getSaldo() {
            console.log(`${this.saldo}`);
    }
    #setSaldo(saldo) {
        this.saldo += saldo;clear
    }
    transaction(type, amount) {
        if (type == "debit") {
            this.saldo += amount;
        } else {
            this.saldo -= amount;
        }
    }
}

class Atm extends Bank {
    constructor() {
        super();
    }
    withdraw(amount) {
        this.transaction("kredit",amount);
    }
    payment(amount) {
        this.transaction("kredit", amount);
    }
    deposit(amount) {
        this.transaction("debit", amount);
    }
}


const atm = new Atm();

//saldo sebelum transaksi
atm.getSaldo();

//Bayar Listrik
atm.payment(500); //-500

//ambil uang
atm.withdraw(200); //300

//setor tunai
atm.deposit(1000); //1300

//Saldo sesudah transaksi
atm.getSaldo();
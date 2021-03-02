class Bank {
    #saldo = 10000;
    getSaldo() {
        console.log(`${this.saldo}`);
}
#setSaldo(saldo) {
    this.#saldo += saldo;
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
const atm = Object.freeze(new Atm());

//overriding function
atm.getSaldo = function() {
    console.log(5000000);
};

atm.getSaldo();


const cekBilanganPrima = (number) => {
    if(number < 0) {
        return "bukan bilangan prima";    
    }else if (number <= 2){
        return "bilangan prima"
    }
    else {
        return number % 2 == 0 ? "bukan bilangan prima" : " bilangan prima";
    }
};
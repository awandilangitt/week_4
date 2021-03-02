const gantiHurufVokal = {string} => {
    let stringKosong = "";
    const hurufVocal = ["a", "i"];

    for(let i=0; i< kalimat.length; i++){
        stringKosong += hurufVocal.includes(kalimat[i]) ? 'i' : kalimat[i]
    }

    console.log(stringKosong)
}

menggantiHurufVokal("saya mau liburan ke bali");
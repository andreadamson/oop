//inimese kirjeldus OOP abil
//klasside kasutus
class Isik {
    //konstruktor
    constructor(e,p, skp) {
        this.eesnimi = e;
        this.perenimi = p;
        this.synnikuupaev = new Date(skp);
    }
    // tervitus meetod
    tervitus() {
        return `Tere, ${this.eesnimi} ${this.perenimi} !`
    }

    //vanuse arvutamine
    arvutaVanus() {
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDate = new Date(vaheSekundites);
        const taisAasta = vanusDate.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }

    //abiellus - uus perenimi

    abiellus(uusperenimi) {
        this.perenimi = uusperenimi
    }
}

const kadi = new Isik("Kadi", "Zopp", "11-11-2000");
console.log(kadi)
kadi.abiellus("yeet")
console.log(kadi)
console.log(kadi.arvutaVanus())
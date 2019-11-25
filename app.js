//inimese kirjeldus OOP abil
//konstruktor

function Isik(e, p, skp) {
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);
}

Isik.prototype.arvutaVanus = function() {
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDate = new Date(vaheSekundites);
        const taisAasta = vanusDate.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }

Isik.prototype.taisNimi = function() {
    return `${this.eesnimi} ${this.perenimi}`;
}

//abiellumine

Isik.prototype.abiellus = function(uusPerenimi){

    this.perenimi = uusPerenimi;
}

const andre = new Isik("Andre","Adamson" ,"07-11-2000");
const kadi = new Isik("Kadi","zopp" ,"11-11-1569");
kadi.abiellus("vaher")

console.log(kadi)
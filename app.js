//inimese kirjeldus OOP abil
//konstruktor

function Isik(e, p, skp) {
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);

//väljasta täisnimi

this.taisNimi = function() {
    return `${this.eesnimi} ${this.perenimi}`;
}


// arvuta vanus
    this.arvutaVanus = function() {
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDate = new Date(vaheSekundites);
        const taisAasta = vanusDate.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }
}

const andre = new Isik("Andre","Adamson" ,"07-11-2000");
const kadi = new Isik("Kadi","zopp" ,"11-11-1569");
console.log(andre)
console.log(andre.arvutaVanus())
console.log(kadi.arvutaVanus())
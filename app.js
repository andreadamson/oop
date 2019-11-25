//inimese kirjeldus OOP abil
//klasside kasutus
class Isik {
    //konstruktor
    constructor(e, p) {
        this.eesnimi = e;
        this.perenimi = p;
    }
    // tervitus meetod
    tervitus() {
        return `Tere, ${this.eesnimi} ${this.perenimi} !`
    }
}

//kliendi klass
class Klient extends Isik {
    //konstruktor
    constructor(e, p, t, s){
        super(e,p);
        this.telefon = t;
        this.staatus = s;
    }


//staatiline meetod
static kuutasu(){
    return 5;
}

}

const kadi = new Klient("Kadi", "Zopp", "1234 4423", "hõbe");
console.log(kadi);
console.log(kadi.tervitus());
console.log(Klient.kuutasu())
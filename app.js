//inimese kirjeldus OOP abil
//konstruktor

function Isik(e, p,) {
    this.eesnimi = e;
    this.perenimi = p;
}

//väljasta täisnimi
Isik.prototype.taisNimi = function() {
    return `${this.eesnimi} ${this.perenimi}`;
}

//Kliendi konstruktor
function Klient(e, p, t, s) {
    Isik.call(this, e, p); //konstruktori laiendamine
    this.telefon = t;
    this.status = s;
}

//teiste meetodite /funktsiooni kasutamine
Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

//määrame täisnime funktsiooni klient objektile

Klient.prototype.taisNimi = function() {
    return `${this.eesnimi} ${this.perenimi} - sinul on ${this.status} tase`;
}

const kadi = new Klient("Kadi","Zopp", "1234 5678", "hõbe");

console.log(kadi.taisNimi())


let eesnimi,perenimi;
let synniKuupaev;

function taisNimi(eesnimi, perenimi){
    return `${eesnimi} ${perenimi}`;
}

function arvutaVanus(synniKuupaev){
    synniKuupaev = new Date(synniKuupaev);
    vaheSekundites = Date.now() - synniKuupaev.getTime();
    vanusDate = new Date(vaheSekundites);
    aastaDate = vanusDate.getUTCFullYear();
    vanus= aastaDate - 1970;
    return `vanus: ${vanus}`
}

console.log(taisNimi("Andre", "Adamson"));
console.log(arvutaVanus("2000.07.11"))
/*
let eesnimi = "Madis";
let perekonnanimi= "Yeet";
let synniKuupaev = "11.07.2000"; 

const taisNimi = eesnimi+ " " + perekonnanimi

function getAge(dob) {
const today = new Date();
let vanus = today.getFullYear() - synniKuupaev.getFullYear();
}

console.log(getAge.today)
console.log(synniKuupaev)
console.log(taisNimi)
console.log(getAge) */
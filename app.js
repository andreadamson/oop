// Raamatu konstruktor
function Raamat(a, p, i){
    this.autor = a;
    this.pealkiri = p;
    this.isbn = i;
  }
  
  // Kasutaja liides - KL
  // konstruktor
  function KL() {
  
  }
  
  // KL funktsionaal
  // sisendväljade puhastamine
  KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  
//raamatu lisamine
KL.prototype.lisaRaamatTabelisse = function (r) {
    const rida = document.createElement("tr");

    rida.innerHTML = `
        <td>${r.pealkiri}</td>
        <td>${r.autor}</td>
        <td>${r.isbn}</td>
    `
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida)
}

//teate väljastamine
KL.prototype.teade = function(s){
    //loome div'i
    const  div = document.createElement('div');
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    const konteiner = document.querySelector('.container');
    const vorm = document.getElementById('book-form');

    konteiner.insertBefore(div, vorm);
}


  // kirjeldame raamatu lisamise sündmust
  document.getElementById('book-form').addEventListener('submit', lisaRaamat);
  // raamatu lisamise funktsioon
  function lisaRaamat(e){
    // võtame andmed vormist
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    // loome raamat andmete põhjal
    const raamat = new Raamat(autor, pealkiri, isbn);
  
    console.log(raamat);
  
    // loome kasutaja liidese objekt temaga opereerimiseks
    const kl = new KL();

// kontroll
    if(pealkiri == "" | autor == "" | isbn == ""){
        kl.teade('tuleb täita kõik väljad!');
    } else {

    //raamatu tabellisse lisamine
    kl.lisaRaamatTabelisse(raamat);
    kl.teade('raamat on lisatud!');
    }
    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();
  
    e.preventDefault();
  } 
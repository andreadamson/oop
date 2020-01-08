class KL{
    puhastaSisend(){
        document.getElementById('task').value = '';
    };
 
    lisaYlesanneTabelisse(y){
        const rida = document.createElement('li');
        rida.innerHTML = `
        <p>${y.task}</p>
        <a class="delete-item kustuta secondary-content"><i class="fa fa-remove"></i></a>`;

        const tabel = document.querySelector('.collection');
        tabel.appendChild(rida);
    };

    teade(s,stiil){
        const div = document.createElement('div');
        div.className = `alert ${stiil}`;

        const tekst = document.createTextNode(s);
        div.appendChild(tekst);
        

        const konteiner = document.querySelector('.container');
        const vorm = document.querySelector('.tere');

        konteiner.insertBefore(div, vorm);
        
        setTimeout(function(){
            document.querySelector('.alert').remove();
        } ,5000);
        };

    kustutaYlesanneTabelist(kustutaElement){
        if(kustutaElement.className === 'kustuta'){
            const tabeliRida = kustutaElement.parentElement;
            tabeliRida.remove();
            return true;
        }
    };

    naitaYlesanded(){
        const ls = new LS();
        const ylesanded = ls.loeYlesanded();
        ylesanded.forEach(function(ylesanne){
            const y = new Ylesanne(ylesanne['task']);

            const kl = new KL();

            kl.lisaYlesanneTabelisse(y)
        })
    }
}


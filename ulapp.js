//andmete lugemine LS
document.addEventListener('DOMContentLoaded', ylesanded);

function ylesanded(e){
    const kl = new KL();

    kl.naitaYlesanded();
};

document.getElementById('clear-tasks').addEventListener('click', clearTasks);

function clearTasks(e){
    const ylesandedList = document.querySelector('.collection');
    while(ylesandedList.firstChild) {
        ylesandedList.removeChild(ylesandedList.firstChild);
    }

    localStorage.clear();
    const kl = new KL();
    kl.teade('ülesanded on kustutatud', 'valid')
}

document.getElementById('task-form').addEventListener('submit', lisaYlesanne);

function lisaYlesanne(e){
    const task = document.getElementById('task').value;

    const ylesanne = new Ylesanne(task);

    const kl = new KL();

    if(task == ''){
        kl.teade("lisa ülesanne", "invalid");
    }else{
        kl.lisaYlesanneTabelisse(ylesanne)

        const ls = new LS();

        ls.salvestaYlesanne(ylesanne);
        kl.teade('ülesanne on lisatud', 'valid')
    }

    kl.puhastaSisend();
    e.preventDefault();
};

document.querySelector('.collection').addEventListener('click', kustutaYlesanne);

function kustutaYlesanne(e){
    const kl = new KL();

    const X = e.target

    task = X.parentElement.previousElementSibling.textContent;
    kl.kustutaYlesanneTabelist(X)

    const ls = new LS();

    onKustutatud = ls.kustutaYlesanneLS(task);

    if(onKustutatud){
        kl.teade('ülesanne on kustutatud', 'valid');
       }
       
       e.preventDefault();
     }
    




//document meetodid
//elementide kustutamine


const liElemendid = document.querySelectorAll('li');

//kustutan viimase elemendi
liElemendid[2].remove();

const ulElemendid = document.querySelector('ul');

ulElemendid.removeChild(liElemendid[1])

const liElement = liElemendid[0];
const link = liElement.children[0]

let sisu = liElement.className;
sisu = link.classList;
sisu = link.classList[1];
link.classList.remove('secondary-content')
link.classList.add('secondary-content')

sisu = link.getAttribute('href');
link.setAttribute('href', 'https.//google.com')

sisu = link

link.setAttribute('title', 'google');
link.removeAttribute('title');
console.log(sisu)
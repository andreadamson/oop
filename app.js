//document meetodid
//elementide loomine

//loo element
const liElement = document.createElement('li');

//lisa klass
liElement.className = 'collection-item';

//lisa ID
liElement.id = 'new-item';

//lisan attribuudi
liElement.setAttribute('title', 'uus element');

//lisan teksti väljundi
liElement.textContent = 'Uus element';

//loome lingi

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML = '<i ci class="fa fa-remove"><i>';


//lisame lingi listi elemendi sisse

liElement.appendChild(link);

ulElement = document.querySelector('ul.collection');

ulElement.appendChild(liElement);

console.log();
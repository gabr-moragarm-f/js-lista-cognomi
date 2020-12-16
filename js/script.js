// array con la lista di cognomi
var cognomi = ['moraga', 'figueroa', 'marchesin', 'bassi', 'caoduro', 'passarin', 'jenkins', 'buonbarile', 'jha\'fall', 'dianto'];

// input dell'utente
var inputCognome = prompt('Buongiorno. Scriva qui il suo cognome.');

inputCognome = inputCognome.toLowerCase(); //standardizzazione dell'input

cognomi.push(inputCognome); // inserimento dell'input nella lista

console.log(cognomi);

cognomi.sort(); // ordine alfabetico della lista

console.log(cognomi);

var listaCognomi = document.getElementById('lista-cognomi')

var cognomiPrecedenti;

// stampa in index.html della lista
for (var i = 0; i < cognomi.length; i++) {
  cognomiPrecedenti = listaCognomi.innerHTML

  listaCognomi.innerHTML = cognomiPrecedenti + '<li>' + cognomi[i] + '</li>'
}

// posizione dell'oggetto nella lista a cui viene sommato 1 per renderla "umana"
var posizioneLista = document.getElementById('posizione-lista')

posizioneLista.innerHTML = cognomi.indexOf(inputCognome) + 1; // stampa posizione

console.log('ok');

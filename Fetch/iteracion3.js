/*2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

function fetchFunction (e) {
    const input = document.querySelector('input')
    fetch('https://api.nationalize.io' + '?name=' + input.value)
    .then ((response) => {return response.json();})
    .then((myJson) => {console.log(myJson);});
}
document.querySelector ('#butom').addEventListener('click', fetchFunction);


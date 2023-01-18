/*2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';*/

function fetchFunction (e) {
    const input = document.querySelector('input')
    fetch('https://api.nationalize.io' + '?name=' + input.value)
    .then ((response) => {return response.json();})
    .then((myJson) => {console.log(myJson);});
}
document.querySelector ('#butom').addEventListener('click', fetchFunction);
// const button = document.querySelector('button').addEventListener('click',buscar) (sin Id)







































/*2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

Ejercicio:
function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();*/

//.Solucion:

async function getCharacters () {
    const res = await fetch ('https://rickandmortyapi.com/api/character');
    const character = await res.json ();
    console.log (character);
}
getCharacters();
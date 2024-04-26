//script sobre el arreglo reduce
const arreglo = [1, 2, 3, 4, 5];
const multiplicacion = arreglo.reduce((acumulador, valorActual) => acumulador * valorActual, 0);
console.log(multiplicacion);



//script sobre el arreglo filter

const array = [1, 2, 3, 4, 5, 6];
const numerosPares = arreglo.filter((valorActual) => valorActual % 2 === 0);
console.log(numerosPares); // Imprime: [2, 4, 6]


//script sobre los arreglos de personajes,etc.

let objetoPokemon = [{
  nombre: 'Nidoking',
  entrada: 34
},
{
  nombre: 'Nidorino',
  entrada: 33
},
{
  nombre: 'Nidoran ',
  entrada: 32
},
{
  nombre: 'Bulbasaur',
  entrada: 1
},
{
  nombre: 'Ivisaur',
  entrada: 2
},
{
  nombre: 'Venusaur',
  entrada: 3
},
{
  nombre: 'Squirtle',
  entrada: 4
},
{
  nombre: 'Wartortle',
  entrada: 5
},
{
  nombre: 'Blastoise',
  entrada: 6
},
{
  nombre: 'Charmander',
  entrada: 7
}];

const mostrarPokemons = () => {
  const contenido = document.getElementById('contenido');
  objetoPokemon.map(Pokemons => {
    contenido.innerHTML += `
      <p class="card mt-5 border-2 border-black ">
          nombre : ${Pokemons.nombre} <br>
          entrada : ${Pokemons.entrada} <br>
      </p>
      `;
  })
}

mostrarPokemons()
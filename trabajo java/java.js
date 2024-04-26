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
      <div class="card mt-5 border-1 border-black ">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${Pokemons.nombre}</p>
    <p class="card-text">${Pokemons.entrada}</p>
  </div>
</div>
      `;
  })
}


mostrarPokemons()



//script sobre la api de una serie.


async function fetchCharacters() {
  try {
      const response = await fetch('https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50');
      const data = await response.json();
      return data;
  } catch (error) {
      console.log('Error fetching data:', error);
  }
}

async function displayCharacters() {
  const characters = await fetchCharacters();
  const charactersList = document.getElementById('characters-list');
  characters.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('col');

      characterCard.innerHTML = `
          <div class="card h-100">
              <div class="card-body">
                  <h5 class="card-title">${character.name}</h5>
                  <p class="card-text">Aliases: ${character.aliases.join(', ')}</p>
                  <p class="card-text">Gender: ${character.gender}</p>
                  <p class="card-text">Culture: ${character.culture}</p>
                  <p class="card-text">Born: ${character.born}</p>
              </div>
          </div>
      `;

      charactersList.appendChild(characterCard);
  });
}

// Llamada inicial para mostrar los personajes
displayCharacters();
//script sobre el arreglo reduce
const arreglo = [1, 2, 3, 4, 5];
const multiplicacion = arreglo.reduce((acumulador, valorActual) => acumulador * valorActual, 0);
console.log(multiplicacion); 



//script sobre el arreglo filter

const array = [1, 2, 3, 4, 5, 6];
const numerosPares = arreglo.filter((valorActual) => valorActual % 2 === 0);
console.log(numerosPares); // Imprime: [2, 4, 6]



let personajes = [{
      nombre: 'Mario',
      edad: 35
    },
    {
      nombre: 'Link',
      edad: 30
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    },
    {
      nombre: 'Samus Aran',
      edad: 32
    }];
  
  console.log(personajes);
// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach(function(item, index, array) {
//   console.log(item.toUpperCase());
// });

// // com Arrow Function
// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase());
//   console.log(index);
// });

// const li = document.querySelectorAll('li');

// li.forEach(i => i.classList.add('ativa'));

// li.forEach(function(item) {
//   item.classList.add('ativa');
// });


// const carros = ['Ford', 'Fiat', 'Honda'];
// const newCarros = carros.map((item) => {
//   return 'Carro ' + item;
// });

// console.log(carros, newCarros)

// carros; // ['Ford', 'Fiat', 'Honda']
// newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

// const novaArray = carros.map(item => item.toUpperCase())
// console.log(novaArray)

// const numeros = [2, 4, 5, 6, 78];
// const numerosMultiplicados = numeros.map(n => n*2);


const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
]

// const tempoAulas = aulas.map(aula => `${aula.nome}: ${aula.min} minutos`);

// const aulas = [10, 25, 30];
// const reduceAulas = aulas.reduce((acumulador, item, ) => {
//     console.log(acumulador, item)
//     return acumulador+item
// }, 0);

// const numeros = [10, 25, 30, 3, 54, 100]

// const maiorNumero = numeros.reduce((acumulador, atual) => acumulador > atual ? acumulador : atual );

// console.log(maiorNumero);

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//     acumulador[index] = atual.nome;
//     return acumulador;
// }, {});

// console.log(listaAulas)

// const frutas = ['Banana', 'Pêra', 'Uva'];

// const temUva = frutas.some((item) => {
//     return item === 'Uva'
// });

// const every = frutas.every((item) => {
//     return item === 'Uva'
// });

// const numeros = [6, 43, 22, 88, 101, 29];
// const maiorQue3 = numeros.every(x => x > 3); // true

// console.log(maiorQue3)

// const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// const buscaUva = frutas.findIndex((fruta) => {
//   return fruta === 'Uva'; 
// }); // 2

// const numeros = [6, 43, 22, 88, 101, 29];
// const buscaMaior45 = numeros.find(x => x > 45); // 88

// console.log(buscaUva, buscaMaior45)

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const aulasMaiores = aulas.filter((aula) => { 
    return aula.min > 15;
  });
  // [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
  
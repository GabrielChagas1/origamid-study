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


// const aulas = [
//     {
//       nome: 'HTML 1',
//       min: 15
//     },
//     {
//       nome: 'HTML 2',
//       min: 10
//     },
//     {
//       nome: 'CSS 1',
//       min: 20
//     },
//     {
//       nome: 'JS 1',
//       min: 25
//     },
// ]

// const tempoAulas = aulas.map(aula => `${aula.nome}: ${aula.min} minutos`);

const aulas = [10, 25, 30];
const reduceAulas = aulas.reduce((acumulador, item, ) => {
    console.log(acumulador, item)
    return acumulador+item
}, 0);

const numeros = [10, 25, 30, 3, 54, 100]

const maiorNumero = numeros.reduce((acumulador, atual) => acumulador > atual ? acumulador : atual );

console.log(maiorNumero);
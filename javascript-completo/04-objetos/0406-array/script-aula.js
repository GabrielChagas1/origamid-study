const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul


const carros = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 3,
}

const carrosArray = Array.from(carros);

let li = document.querySelectorAll('li'); // NodeList
console.log(Array.isArray(li)); // false

li = Array.from(li); // Array
console.log(Array.isArray(li))// true

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length); // 3

console.log(frutas[0].length); // 6
console.log(frutas[1].length); // 4
console.log(frutas[2].length); // 2


console.log(instrumentos.sort())
const idades = [32,21,33,43,1,12,8];
console.log(idades.sort());

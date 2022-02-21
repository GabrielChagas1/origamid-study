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


carrosArray.splice(0, 2, "Tesla")

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3))
// ['Item1', 'Item2', 'Item1', 'Item2']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1));
// ['Item1', 'Item2', 'Item3', 'Item1']

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];


const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

const cloneLinguagens = linguagens.slice(0, 8);
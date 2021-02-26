let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = 1000;

for (let contador = 0; contador < numbers.length; contador += 1) {
  let resultado = numbers[contador]
  if (resultado < menor) {
      menor = resultado
  }
}
console.log(menor)



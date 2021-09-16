let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0

for (let contador = 0; contador < numbers.length; contador += 1){
sum += numbers[contador]
}
let avar = sum /= numbers.length
if (avar > 20){
    console.log('Valor maior que 20')
}
else{
    console.log('valor menor que 20')
}
console.log(avar)


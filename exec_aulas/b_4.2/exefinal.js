let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; i++) {
    resultado += numbers[i];
}
let media = resultado / numbers.length;

console.log(media)

if (media > 20){
    console.log("valor maior que 20")
}
else {
    console.log("valor menor que 20")
}

for (let maiorvalor = 0; maiorvalor < numbers.length; maiorvalor++) {
    if (maiorvalor > numbers)
    console.log(maiorvalor)
}
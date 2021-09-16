let a = 10;
let b = 5;
a = 20
b = 15

console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

let c = 20;
let d = 10;
c = 2;
if (c >= d) {
    console.log("correto");
}
else {
    console.log("errado")
}

let f = 40;
let g = 20;
let h = 10;
g = 60

if (f > g && f > h) {
    console.log('F é o maior');
}
else if (g > f && g > h) {
    console.log('G é o maior');
}
else {
    console.log ('H é o maior');
}

let i = 2
i = -2

if (i > 0) {
    console.log('positive');
}
else if (i < 0) {
    console.log('negative');
}
else {
    console.log('Zero');
}

let j = 90;
let k = 45;
let l = 45;
k = 100
let somadosangulos = j + k + l;

if (somadosangulos == 180){
    console.log('True');
}
else {
    console.log('False');
}
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 101];
let higherNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}

console.log(higherNumber);
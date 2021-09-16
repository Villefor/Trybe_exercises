



let numberChecker = (myNumber, randomNumber) => myNumber === randomNumber;

let randomNumbers = Math.floor(Math.random() * 5) + 1;

const random = () => {
     randomNumbers.forEach(randomNumber => {
        (randomNumber === myNumber) ? 'Parabéns, você ganhou!' : 'Tente novamente'
   }
)}

console.log(numberChecker(random))
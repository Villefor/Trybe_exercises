

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};


const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};
const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`, {nationality = 'Brazilian'} = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
const customer = {
  firstName: 'Roberto',
};
customer.lastName = 'Andrade';
const age = 20;
const sumName = `${customer.firstName} ${customer.lastName}`;
const fullName = 'fullName';
customer[fullName] = sumName;
console.log(customer);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
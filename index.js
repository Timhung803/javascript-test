// This is my first JavaScript code!
console.log('first code');

// learning variables
let name = 'tim';
console.log(name);

let firstName = 'tim';
console.log(firstName)

//start practicing constant 
let interestRatelet = 0.3;
interestRatelet = 1;
console.log(interestRatelet);

const interestRate = 0.3;
console.log(interestRate);

//Primitive Type
let Name = 'Tim'; //String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let lastName; // Undefined
let selectedColor = null; //null
console.log(Name, age, isApproved, lastName, selectedColor)

//Object
let name1 = 'tim';
let age1 = 32;

let person = {
    name1: 'tim',
    age1: 32
};

console.log(person);
console.log(person.name1);

// Dot Notation
person.name1 = 'tom';

console.log(person.name1);

//Bracket Notation
let selection = 'name1'
person[selection] = 'Mary';

console.log(person['name1']);

//array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);



//Exercise 1
function greet(recipient = 'John') {
    console.log(`Hallo, ${recipient}`);
}
greet();
greet('Felix');

//Exercise 2
function multiply(mulNum1, mulNum2) {
    return mulNum1 * mulNum2;
}
console.log(multiply(2, 3));
console.log(multiply(5, 7));

//Exercise 3
const person = {
    name: 'John',
    age: 63,
    gender: 'Male',
};
console.log(person);

//Exercise 4
const car = {
    make: 'Mercedes-Benz',
    model: 'E-Class Sedan',
    year: 2023,
};
console.log(car);

//Exercise 5
function reverseString(origString) {
    return origString.split("").reverse().join("");
}
console.log(reverseString('hello'));

//Exercise 6
function calculateArea(radius) {
    return Math.PI * (radius * radius);
}
console.log(calculateArea(5));

//Exercise 7
console.log(`Date: ` , new Date());

//Exercise 8
console.log(Math.random().toFixed(1) * 10);

//Exercise 9
function statement(numOfDays, randomPerson) {
    return (`It has been ${numOfDays} since I have visited ${randomPerson}!`);
}
console.log(statement(42, 'Grandpa Joe'));

//Exercise 10
const user = {
    name: 'Alex',
    age: 53,
    occupation: 'Full stack Web Developer',
};
function printUser(user) {
    console.log(user.name , ' ' , user.age , ' ' , user.occupation);
}

//Exercise 11 (create key array first, then use array.sort() on key array, iterate through array to search for key, push value of key to second array)
const keysAndValues = { 
    a: 1, 
    c: 3, 
    b: 2 
};
console.log("hello world!");

let myName = "Festus";
console.log(myName);

let length = 10;
let width = 15;
let area = length * width;
console.log(area);

let myNum = 14;
if(myNum % 2 == 0){
    console.log("Even!");
} else {
    console.log("Odd!");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//const nameIn = prompt("Enter your name: ");
//console.log(`Greetings, ${nameIn}! Welcome to the website`);

let numIn = prompt("Enter your number: ");

for (let i = numIn - 1; i >= 1; i--) {
    numIn = numIn*i;
}
console.log(numIn);

//let myYear = prompt("Enter your year: ");

/*if(myYear % 4 == 0){
    console.log("Leap Year!");
} else {
    console.log("Not Leap Year :(");
}
*/

let i = 1;
let result = 0;
while (i <= 100) {
    result += i;
    i++;
}
console.log(result);

//exercise 12
let wares = [
    {
        name: "Apples",
        price: 2.50,
    },
    {
        name: "Bananas",
        price: 2.00,
    },
    {
        name: "Chocolate",
        price: 4.00,
    },
];

const ul = document.getElementById('wares');
for (let i = 0; i < wares.length; i++) {
    ul.innerHTML += `<li>${wares[i].name}</li>`;
}

//exercise 13
function arrayOfMultiples(num, length) {
    
}

arrayOfMultiples(7, 5);

//exercise 14
let enteredNum = 0;

if(enteredNum < 0) {
    console.log("Negative");
} else if(enteredNum > 0) {
    console.log("Positive");
} else {
    console.log("Absolute zero");
}
//exercise 15
let tableInt = 5;
for (let index = 1; index <= 10; index++) {
    console.log(tableInt*index);
}

function isPrime(testNum) {

}
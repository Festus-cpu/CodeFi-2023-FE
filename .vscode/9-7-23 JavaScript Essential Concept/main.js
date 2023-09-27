//Exercise 1
function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // yes we access outerVar
		console.log(innerVar); // yes we access innerVar
	}

	innerFunction();// inner
}

outerFunction();// outer

//Exercise 2

mainFunction();

function mainFunction() {
	console.log("NewFunction")
    let NewFunction = "Hello"
    console.log(NewFunction)
}

//Exercise 3
function outerFunction(){
    let outerVariable = "I'm from the outer function!"

    function innerFunction() {
        console.log(outerVariable)
    }
    return innerFunction()
}
outerFunction()

//Exercise 4

// Declare a global variable here
let globalVariable = "Initial value";

function modifyGlobal() {
    // Try to modify the global variable here
    globalVariable = "Modified value";
    console.log(globalVariable)
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let variableLocal = "Initial value";
    console.log(variableLocal)
}

// Call both functions here
modifyGlobal()
localScopeTest()

//Exercise 5
function functionFactory(param) {
    return function() {
        console.log(param);
    }
}
const testParam = functionFactory(5);
testParam();

// Exercise 6

function hoistingTest() {

    
    // console.log("This is" +name)// cannot access 'name'before initialization
     //let name = "John";


     let name = "John";
     console.log("This is" +name)
 }

 hoistingTest();

// //Exercise 7
 function setupCounter() {

      let count = 0;
   return function(){
       count++;
       console.log(count);
   }
}

const countered = setupCounter();

countered()
countered()
countered()
countered()
countered()

// Exercise 8

function initializeCounter() {
   let counter = 0;

   return function(){
       counter++;
       console.log(counter)

       if(counter===10){
           counter=0;
       }
   }
}

const counter = initializeCounter();

counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()
counter()

// Exercise 9
let globalVariables = "Hello"

function modifyGlobalV(){
   globalVariable = "Modified GlobalVariable"
}

function modifyLocalVariable () {
   console.log(localVariable);// undefined
   let localVariable = "modifyLocalVariable"
   console.log(localVariable);// modifyLocalVariable

}

modifyGlobalV();
console.log(globalVariable)

// Basic Class Definition//
class Animal {
   constructor(name) {
       this.name = name;
   }
   speak() {
       console.log(`${this.name} make a sound.`)
   }
}

const dog = new Animal('Rover');
dog.speak();

// Getter And Setter//
class Rectangle {
   constructor(width, height) {
       this._width = width;
       this._height = height;
   }

   get area() {
       return this._width * this._height;
   }

   
   set dimension(value) {
       [this._width, this._height] = value;
   }
} 

const rect = new Rectangle(4, 5)
console.log(rect.area);

rect.dimensions = [2, 3];
console.log(rect.area);

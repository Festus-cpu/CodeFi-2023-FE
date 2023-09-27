
//Exercise 1
// Global function:

function globalFunction() {
    console.log(this);
}

// Object Method

const myObject = {
    methodFunction(){
        console.log(this)
    }
}

// Arrow Function Inside an Object

const myobject ={
    arrowFunction:() => {
        console.log(this);
    }
};
//  these demonstrate three ways of defining functions
//  and how the this act in each scenario


 //Exercise 2

 class Person {
     constructor(name,age){
       this.name = name;
       this.age = age;

     }
   greet(){
         console.log(`Hello my name is ${this.name}
      and I am ${this.age}years old`);
}
 }

    

// // instantiate two differentPerson object
 const person1 = new Person("John",30);
 const person2 = new Person("Amanda",31)

// // invoke their greeting
 person1.greet();
 person2.greet();

// exercise 3

 class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name}
         and I am ${this.age}years old`)
 }

 
 }
    

// // instantiate two differentPerson object
const person3 = new Person("Felix",40);
 const person4 = new Person("Derrick",39)

// invoke their greeting
person3.greet();
person4.greet();

// // exercise 4

 class Persons {
    constructor(name,age){
    this.name = name;
     this,age = age;
    }
     greet(){
        console.log(`Hello, my name is ${this.name} and I am${this.age} years old.`);
   }
     static info(){
        return "This is a Person class."
     }
 }

// // Accessing the info() method from an instance of class itself

 console.log(Persons.info());

// // Creating an instance of the Persons class

 const person6 = new Person("Topacio",25);


 // Accessing the info()method from an instance of the class

  console.log(person6.info()); // TypeError:person6.info is not a function

 //  Exercise 5

 class Person{
    constructor(name,age){
     this.name = name;
    this._age = age;
     }

    get age() {
        return this._age;
     }

     set age(newAge) {
    if(newAge >=0){
        this._age = newAge;
    }
     else{
         console.log("Age cannot be set to a negative value")
     }
    }

    greet(){
         console.log(`Hello, my name is ${this.name};
          and I am${this._age} years old.`);
  };
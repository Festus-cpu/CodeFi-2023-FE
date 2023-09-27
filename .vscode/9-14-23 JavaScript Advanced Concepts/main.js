
// Exercise 1

class Subject {
    constructor(){
        this.observers = [];
    }
    addObserver(observer) {
        this.observers = []
     }

     removeObserver(observer){
        const index=
        this.observers.indexOf(observer);
        if(index > -1){
            this,observer.splice(index, 1)
        }
     }
}

class observer {
    update() {
        console.log('observer updated!')
    }
}

 

// exercise 2
const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    }
};

const {name, age} = person;

console.log(name);
console.log(age)

// How to use array destructuring.
const fruit = ['apple', 'banana', 'cherry', 'date'];

const [,second,,fourth] = fruit;

console.log(second);
console.log(fourth);

// To extract the city and the country properties 
// from the address object nested within the person object

const {address: {city, country}} = person;

console.log(city);
console.log(country);

// exercise 3

async function fetchPosts() {
    try{const url ='https://jsonplaceholder.typicode.com/posts?_limit=10';
    const data = await Response.json();
    return data;

    }catch (error){
        console.log('An error occurred while fetching the post:',error);
    }
    

}

fetchPosts()
.then(posts => console.log(posts))
.catch(error => console.log('An error occurred:',error))

//Exercise 4
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(obs) {
        this.observers.push(obs);
        console.log(this.observers);
    }

    removeObserver(obs) {
        for(let i = 0; i < this.observers.length; i++){
            if(obs == this.observers[i]){
                this.observers.splice(i, 1);
            }
        }
        console.log(this.observers);
    }
	notifyObservers(data) {
		// TODO: Notify all observers with given data
        // console.log('from observers: ', this.observers);
        this.observers.forEach((obs) => {
            obs.update(data);
        });
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
        try {
            const data = await fetch(url);
            const res = await data.json();
            //console.log(res);
            this.notifyObservers(res);
        } catch (err) {
            console.log('Could not fulfill this request. Please check the following error: ', err);
        }
		// TODO: Fetch data from the API and notify observers
	}
}

class Observer {
	update(data) {
        try {
            const {title: firstTitle} = data[0];
            console.log(firstTitle);
        } catch (err) {
            console.log('We got an error :( :', err);
        }
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method

const mySubject = new Subject();
const obs1 = new Observer();
const obs2 = new Observer();
const obs3 = new Observer();
mySubject.addObserver(obs1);
mySubject.addObserver(obs2);
mySubject.addObserver(obs3);
mySubject.fetchAndNotify();
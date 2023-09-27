//Exercise 1
const myDiv = document.querySelector('#myDiv');

function changeDivBgColor() {
    myDiv.style.backgroundColor = '#d0c64a';
}
changeDivBgColor();

const pArray = document.querySelectorAll('p');
pArray.forEach((pItem) => console.log(pItem.innerText));

// EXERCISE 4
const button = document.createElement('button');
button.textContext = 'Click Me';

//  Append the button to the button
document.body.appendChild(button);

// Add event listener to the button
button.addEventListener('click', function() {
   alert('Button was clicked')
})

// EXERCISE 5

const inputField =
document.getElementById('textInput');
const displayField = 
document.getElementById('textDisplay');
inputField.addEventListener('input', function() {
   textDisplay.textContent = inputField.value;
});

// EXERCISE 6
const item = [
   {name: "Item 1"},
   {name: "Item 2"},
   {name: "Item 3"},
   {name: "Item 4"},
];

const itemList = 
document.getElementById("itemList");
item.forEach(({name})=>{
   itemList.innerHtMl += `<li>${name}</li>`;
});
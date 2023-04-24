const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];



    const h1 = document.querySelector('h1');
    const changeColor = function (evt){
        console.log(evt); 
        h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');

for (let color of colors) {
   const box = document.createElement('div');
   box.style.backgroundColor = color;
   box.classList.add('box');
   container.appendChild(box);
   box.addEventListener('click', changeColor);
}



// lesson 159: key Events: keypress, keyup, keydown
document.body.addEventListener('keypress', function(e) {
    console.log(e);
}); // adds keypress to body

const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
    console.log('Key Down!'); // adds keydown to specific input
});

input.addEventListener('keyup', function (e) {
    console.log('Key up!');
});

input.addEventListener('keypress', function (e) {
    console.log('Key Press!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    // add new item to list
    const newItemText = this.value;
    const newItem = document.createElement('li');
    newItem.innerText = newItemText;
    itemsUL.appendChild(newItem);
    this.value = '';
    }
});
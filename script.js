//Default grid 16x16
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';

//make one div and give it a class
const makeDiv = () => {
	const div = document.createElement('div');
	const bodyGridContainer = document.querySelector('body .grid-container');
	bodyGridContainer.appendChild(div);
	div.className = 'grid-item';
}

for(let i = 0; i<16; i++) {
	for(let j = 0; j<16; j++) {
		makeDiv();
	}
}

//define the number of columns  the new grid will have
const numberOfColumns = (lengthOfGrid) => {
	let x = 'repeat(' + lengthOfGrid + ', 1fr)';
	gridContainer.style.gridTemplateColumns = x;
}

//call makeDiv() 16x16 times. And give it the class 'grid-item'
const makeAllDiv = (lengthOfGrid) => {
	for(let i = 0; i<lengthOfGrid; i++) {
		for(let j = 0; j<lengthOfGrid; j++) {
			makeDiv();
		}
	}
}
//Create an nodeList with all the .grid-item elements
const gridItem = document.querySelectorAll('.grid-item');

//Change the background color of all .grid-items
gridItem.forEach((item) => {
	item.addEventListener('mouseenter', () => {
		item.style.backgroundColor = 'gray';
	})
})

//Button 'New Grid' opens the dialog
const buttonNewGrid = document.querySelector('.button-new-grid');
const dialogNewGrid = document.querySelector('#size-of-grid');

buttonNewGrid.addEventListener("click", () => {
	dialogNewGrid.showModal();
})

const buttonOK = document.querySelector('#button-ok');
buttonOK.addEventListener('click', btnOk = () => {

	//Get the height and length from the dialog.
	let newLength = document.getElementById('length').value;
	//Convert the string into number.
	newLength = parseInt(newLength);

	numberOfColumns(newLength);
	makeAllDiv(newLength);
})


//const gridContainer = document.querySelector('.grid-container');
//gridContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
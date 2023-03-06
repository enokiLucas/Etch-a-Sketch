//make one div and give it a class
const makeDiv = () => {
	const div = document.createElement('div');
	const bodyGridContainer = document.querySelector('body .grid-container');
	bodyGridContainer.appendChild(div);
	div.className = 'grid-item';
}

//default length
let Length = 55;

//define gridContainer
const gridContainer = document.querySelector('.grid-container');

//function makeGrid(param)
///set the number of columns the grid will have and
///calls makeDiv param^2 number of times.
const makeGrid = (numberOfSquares) => {
	const x = 'repeat(' + numberOfSquares + ', 1fr)';
	gridContainer.style.gridTemplateColumns = x;

	for(let i = 0; i<numberOfSquares; i++) {
		for(let j = 0; j<numberOfSquares; j++) {
			makeDiv();
		}
	}
}

//Default makeGrid();
makeGrid(Length);

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

})

//make a grid of 16x16 div
//Add a red border to the grid and blue border to each div

//make one div and give it a class
const makeDiv = (text, className) => {
	const div = document.createElement('div');
	const bodyGridContainer = document.querySelector('body .grid-container');
	bodyGridContainer.appendChild(div);
	div.className = className;
	div.textContent = text;
}

//call makeDiv() 16x16 times. And give it the class 'grid-item'
for(let i = 0; i<16; i++) {
	for(let j = 0; j<16; j++) {
		makeDiv((i+1) +'x'+ (j+1), 'grid-item');
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